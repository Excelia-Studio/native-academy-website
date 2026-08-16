'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './WelcomeVoice.css';

interface Greeting {
  language: string;
  text: string;
  audioSrc: string;
  flag: string;
}

const GREETINGS: Greeting[] = [
  {
    language: 'Yorùbá',
    text: 'Ẹ káàbọ̀',
    audioSrc: '',
    flag: '🇳🇬',
  },
  {
    language: 'Igbo',
    text: 'Nnọọ',
    audioSrc: '',
    flag: '🇳🇬',
  },
  {
    language: 'Hausa',
    text: 'Barka da zuwa',
    audioSrc: '/audio/welcome-hausa.mp3',
    flag: '🇳🇬',
  },
  {
    language: 'English',
    text: 'Welcome',
    audioSrc: '/audio/welcome-english.mp3',
    flag: '🌍',
  },
];

const DISPLAY_DURATION = 2200;

export default function WelcomeVoice() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    if (isDismissing) return;
    setIsDismissing(true);
    cleanup();
    setTimeout(() => setIsVisible(false), 500);
  }, [isDismissing, cleanup]);

  const playGreeting = useCallback(
    (index: number) => {
      if (index >= GREETINGS.length) {
        timeoutRef.current = setTimeout(() => dismiss(), 600);
        return;
      }

      setCurrentIndex(index);
      const greeting = GREETINGS[index];

      const langCode = greeting.language === 'Yorùbá' ? 'yo' :
                       greeting.language === 'Igbo' ? 'ig' :
                       greeting.language === 'Hausa' ? 'ha' : 'en';

      const trySpeechSynthesis = () => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          try {
            const utterance = new SpeechSynthesisUtterance(greeting.text);
            utterance.lang = langCode;
            utterance.rate = 0.85;
            utterance.onend = () => {
              timeoutRef.current = setTimeout(() => playGreeting(index + 1), 400);
            };
            utterance.onerror = () => {
              timeoutRef.current = setTimeout(() => playGreeting(index + 1), DISPLAY_DURATION);
            };
            window.speechSynthesis.speak(utterance);
          } catch {
            timeoutRef.current = setTimeout(() => playGreeting(index + 1), DISPLAY_DURATION);
          }
        } else {
          timeoutRef.current = setTimeout(() => playGreeting(index + 1), DISPLAY_DURATION);
        }
      };

      // If no audio file, go straight to SpeechSynthesis
      if (!greeting.audioSrc) {
        trySpeechSynthesis();
        return;
      }

      if (audioRef.current) {
        const audio = audioRef.current;
        audio.src = greeting.audioSrc;
        audio.load();

        const moveToNext = () => {
          audio.removeEventListener('ended', moveToNext);
          audio.removeEventListener('error', handleError);
          timeoutRef.current = setTimeout(() => playGreeting(index + 1), 400);
        };

        const handleError = () => {
          audio.removeEventListener('ended', moveToNext);
          audio.removeEventListener('error', handleError);
          trySpeechSynthesis();
        };

        audio.addEventListener('ended', moveToNext);
        audio.addEventListener('error', handleError);

        audio.play().catch(() => {
          handleError();
        });
      } else {
        trySpeechSynthesis();
      }
    },
    [dismiss]
  );

  // Start playback on user interaction (needed for autoplay policy)
  const handleStart = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    playGreeting(0);
  }, [hasStarted, playGreeting]);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('welcome-voice-played');
    if (hasPlayed) return;

    sessionStorage.setItem('welcome-voice-played', 'true');
    setIsVisible(true);

    return () => {
      cleanup();
    };
  }, [cleanup]);

  if (!isVisible) return null;

  const currentGreeting = GREETINGS[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && !isDismissing && (
        <motion.div
          key="welcome-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="welcome-overlay"
          onClick={hasStarted ? dismiss : handleStart}
          role="dialog"
          aria-label="Welcome greeting"
          id="welcome-voice-overlay"
        >
          {/* Hidden audio element */}
          <audio ref={audioRef} preload="auto" />

          {/* Background pattern */}
          <div className="welcome-bg-pattern" />

          {/* Radial glow */}
          <motion.div
            className="welcome-glow"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Content */}
          <div className="welcome-content">
            {/* Language indicator pills at top */}
            <motion.div
              className="welcome-pills"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {GREETINGS.map((g, i) => (
                <div
                  key={g.language}
                  className={`welcome-pill ${i === currentIndex && hasStarted ? 'welcome-pill--active' : ''}`}
                >
                  <span className="welcome-pill-dot" />
                  {g.language}
                </div>
              ))}
            </motion.div>

            {/* Main greeting text */}
            {!hasStarted ? (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="welcome-greeting-container"
              >
                <motion.div
                  className="welcome-play-button"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                </motion.div>
                <h2 className="welcome-greeting-text welcome-tap-text">
                  Tap to hear your welcome
                </h2>
                <p className="welcome-language-label">
                  In Yorùbá · Igbo · Hausa · English
                </p>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="welcome-greeting-container"
                >
                  <span className="welcome-flag">{currentGreeting.flag}</span>
                  <h2 className="welcome-greeting-text">
                    {currentGreeting.text}
                  </h2>
                  <p className="welcome-language-label">
                    {currentGreeting.language}
                  </p>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Progress bar */}
            {hasStarted && (
              <motion.div
                className="welcome-progress-track"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {GREETINGS.map((_, i) => (
                  <div key={i} className="welcome-progress-segment">
                    <motion.div
                      className="welcome-progress-fill"
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: i < currentIndex ? 1 : i === currentIndex ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                ))}
              </motion.div>
            )}

            {/* Skip hint */}
            <motion.p
              className="welcome-skip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: hasStarted ? 0.5 : 2, duration: 0.5 }}
            >
              {hasStarted ? 'Tap anywhere to skip' : ''}
            </motion.p>
          </div>

          {/* Sound wave animation */}
          {hasStarted && (
            <div className="welcome-waves">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="welcome-wave-bar"
                  animate={{
                    scaleY: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Dismissing state */}
      {isDismissing && (
        <motion.div
          key="welcome-dismiss"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          className="welcome-overlay"
          onAnimationComplete={() => setIsVisible(false)}
        >
          <div className="welcome-content">
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="welcome-greeting-container"
            >
              <h2 className="welcome-greeting-text">{currentGreeting.text}</h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
