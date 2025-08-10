import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  opacity: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHeart = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 10,
      size: 0.5 + Math.random() * 0.8,
      opacity: 0.1 + Math.random() * 0.2,
    });

    // Initial hearts
    const initialHearts = Array.from({ length: 8 }, generateHeart);
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHearts = [...prev, generateHeart()].slice(-12); // Keep only 12 hearts max
        return newHearts;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            className="text-pink-400 animate-pulse"
            style={{
              width: `${heart.size}rem`,
              height: `${heart.size}rem`,
            }}
            fill="currentColor"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;