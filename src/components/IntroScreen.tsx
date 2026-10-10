import React, { useRef, useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/audio';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    sound.playOpenModal();
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [isExiting, onComplete]);

  const handleScreenClick = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.muted) {
        // First click: unmute and reset time to 0 to watch with sound
        video.muted = false;
        video.currentTime = 0;
      } else {
        // Second click: skip intro
        handleFinish();
      }
    } else {
      handleFinish();
    }
  }, [handleFinish]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play unmuted first
    video.muted = false;
    
    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((_err) => {
        // Browser blocked unmuted autoplay!
        // We MUST fallback to muted, otherwise the video won't show at all (black screen).
        video.muted = true;
        video.play().catch(() => {});
      });
    }

    const handleEnded = () => {
      handleFinish();
    };

    video.addEventListener('ended', handleEnded);

    // Escape / Space / Enter to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 9 seconds hard limit for the intro as requested
    const timeoutId = setTimeout(() => {
      handleFinish();
    }, 9000);

    return () => {
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#050508] flex items-center justify-center overflow-hidden select-none cursor-pointer"
          onClick={handleScreenClick}
        >
          {/* Pure Full-Screen Video Container (Merged Background) */}
          <div className="relative w-full h-full flex items-center justify-center bg-[#050508]">
            <video
              ref={videoRef}
              src="/gemini_generated_video_d13b1ceb.mp4"
              autoPlay
              playsInline
              preload="auto"
              className="w-full h-full object-contain md:object-cover max-w-full max-h-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
