import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const setupCanvas = () => {
      // Set canvas to cover the entire document
      canvas.width = window.innerWidth;
      // Use a much larger height to ensure coverage
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight * 3 // Minimum 3x viewport height
      );

      // Create particles based on the full canvas size
      particles = [];
      const particleCount = Math.floor((canvas.height / window.innerHeight) * 50);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 2.0,
          speedY: (Math.random() - 0.5) * 2.0,
          opacity: Math.random() * 0.2 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFD700';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initial setup
    setupCanvas();
    animate();

    // Handle window resize
    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Recalculate after a delay to ensure all content is loaded
    const timeouts = [
      setTimeout(setupCanvas, 500),
      setTimeout(setupCanvas, 1000),
      setTimeout(setupCanvas, 2000)
    ];

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 1,
        height: '100%',
        minHeight: '300vh' // Ensure minimum coverage
      }}
    />
  );
};

export default ParticleBackground;