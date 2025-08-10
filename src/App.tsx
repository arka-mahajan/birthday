import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Heart, Calendar, Music, Images } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  // Placeholder images - replace these URLs with actual photos of Ishika
  const images = [
    '/src/assets/ishika1.jpg',
    '/src/assets/ishika9.jpg',
    '/src/assets/ishika8.jpg',
    '/src/assets/ishika10.jpg',
    '/src/assets/ishika5.jpg'
  ];

  // Birthday date: September 8, 2025
  const birthdayDate = new Date('2025-09-08T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = birthdayDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdayDate]);

  useEffect(() => {
    // Auto-advance images every 4 seconds
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(imageTimer);
  }, [images.length]);

  const toggleMusic = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300/40 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            size={16 + Math.random() * 16}
          />
        ))}
      </div>

      {/* Audio Element */}
      <audio
        ref={setAudioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Add your birthday song file here */}
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-4 animate-pulse">
            Ishika Haldar
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light tracking-wide">
            Turning <span className="font-bold text-pink-600">20</span> in...
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center group">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-4xl md:text-5xl font-bold w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {formatNumber(value)}
                  </div>
                  <p className="text-gray-600 mt-2 text-sm md:text-base font-medium capitalize">
                    {unit}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600 font-medium flex items-center justify-center gap-2">
                <Calendar size={20} />
                September 8, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
              <Images className="text-pink-500" />
              Beautiful Memories
            </h2>
            <p className="text-gray-600">Celebrating the amazing person you are</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-white/30 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt={`Memory ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Music Controls */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30">
            <div className="flex items-center gap-4">
              <Music className="text-pink-500" size={24} />
              <span className="text-gray-700 font-medium">Birthday Music</span>
              <button
                onClick={toggleMusic}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Birthday Message */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
            <Heart className="mx-auto text-pink-500 mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Happy Almost Birthday!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Every day with you is a celebration, but your birthday is extra special. 
              You bring so much joy, laughter, and love into this world. As you turn 20, 
              may this new chapter be filled with amazing adventures, beautiful memories, 
              and all the happiness your heart can hold.
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              You are absolutely incredible! 💕
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;