import React, { useState, useEffect } from 'react';
import { Gift, Heart, Sparkles, Star } from 'lucide-react';

const RevealSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Anniversary background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-300 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              width: '12px',
              height: '12px',
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transform transition-all duration-2000 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}
        >
          <div className="mb-8">
            <Gift className="w-20 h-20 text-purple-500 mx-auto mb-6 animate-bounce" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent font-dancing">
            🎉 Happy Anniversary! 🎉
          </h2>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-gradient-to-r from-pink-200 to-purple-200 mb-12">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-red-500 mx-2 animate-pulse" fill="currentColor" />
              <Heart className="w-16 h-16 text-red-500 mx-2 animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-12 h-12 text-red-500 mx-2 animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>

            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 font-dancing leading-relaxed">
              "Two years ago today, we shared our first kiss and started this incredible journey together."
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                🌟 From that magical moment on August 29th, 2023, when our lips first met, 
                to all the countless memories we've created together - you have been my everything.
              </p>
              
              <p className="text-lg">
                💫 Every day with you feels like a fairytale. You've brought so much joy, 
                laughter, and love into my life that I can't imagine a world without you in it.
              </p>
              
              <p className="text-lg">
                🎀 You are my best friend, my partner in adventure, my comfort in tough times, 
                and my biggest supporter in everything I do.
              </p>
              
              <p className="text-lg font-semibold text-purple-700">
                💕 Here's to many more years of love, laughter, and unforgettable moments together. 
                I love you more than words could ever express!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-400 to-red-500 text-white p-8 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Heart className="w-12 h-12 mx-auto mb-4" fill="currentColor" />
              <h3 className="text-xl font-bold mb-2">Forever Yours</h3>
              <p className="text-pink-100">My heart belongs to you, today and always.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white p-8 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">You're Magic</h3>
              <p className="text-purple-100">You make every ordinary moment extraordinary.</p>
            </div>

            <div className="bg-gradient-to-br from-rose-400 to-pink-500 text-white p-8 rounded-3xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">My Gift</h3>
              <p className="text-rose-100">You are the greatest gift life has given me.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-3xl font-dancing text-gray-700 mb-4">
              Happy 2nd Anniversary, my love! ❤️
            </p>
            <p className="text-lg text-gray-600">
              Thank you for being you, and for choosing to love me every single day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevealSection;