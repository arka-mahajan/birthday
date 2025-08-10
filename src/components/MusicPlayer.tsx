import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Free romantic background music URL (you can replace with your preferred track)
  const musicUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"; // Placeholder - you'll want to use a proper romantic song

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.3; // Set to 30% volume for background music

    // Auto-play after user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (!isPlaying) {
          playMusic();
        }
      }
    };

    // Listen for any user interaction to enable autoplay
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted, isPlaying]);

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log('Audio play failed:', error);
    }
  };

  const pauseMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        muted={isMuted}
      >
        <source src={musicUrl} type="audio/mpeg" />
        {/* Fallback for browsers that don't support the audio element */}
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Panel */}
      <div className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-pink-200/50">
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-all duration-300"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Music Info */}
        <div className="mt-3 text-center">
          <p className="text-xs text-gray-600 font-medium">
            🎵 Romantic Melody
          </p>
          <div className="flex items-center justify-center mt-1">
            <div className={`w-2 h-2 bg-pink-500 rounded-full mr-1 ${isPlaying ? 'animate-pulse' : ''}`}></div>
            <p className="text-xs text-gray-500">
              {isPlaying ? 'Now Playing' : 'Paused'}
            </p>
          </div>
        </div>
      </div>

      {/* Initial Play Prompt */}
      {!hasInteracted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl">
            <div className="mb-6">
              <Volume2 className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-dancing">
              🎵 Experience Our Love Story
            </h3>
            <p className="text-gray-600 mb-6">
              Click anywhere to start the romantic background music and begin this beautiful journey.
            </p>
            <button
              onClick={() => {
                setHasInteracted(true);
                playMusic();
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Our Story 💕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;