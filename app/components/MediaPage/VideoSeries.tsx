'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  PlayIcon,
  PauseIcon,
  VolumeHighIcon,
  VolumeMuteIcon,
  CheckmarkCircle02Icon,
  BookOpen01Icon,
  ReloadIcon,
  ArrowRight01Icon,
  ComputerIcon,
  Clock01Icon,
  FacebookIcon,
  InstagramIcon
} from '@hugeicons/core-free-icons';

interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  description: string;
  duration: string;
  durationSeconds: number;
  thumbnailColor: string;
  emoji: string;
  videoUrl: string;
  vocab: { word: string; translation: string; phonetic: string; tip: string }[];
}

const episodes: Episode[] = [
  {
    id: 'episode-1',
    episodeNumber: 1,
    title: 'ÌKÍNI (Greetings)',
    description: 'The crucial first step into building real conversation blocks. Learn the foundation of showing respect in Yoruba.',
    duration: '1:36',
    durationSeconds: 96,
    thumbnailColor: 'from-green-600/90 to-green-800/95',
    emoji: '👋🏾',
    videoUrl: '/videos/episode1.mp4',
    vocab: [
      { word: 'Ẹ káàárọ̀', translation: 'Good morning (Respectful)', phonetic: 'Eh-kah-ah-raw', tip: 'Used for parents, teachers, and elders. The prefix "Ẹ" shows respect.' },
      { word: 'Káàárọ̀', translation: 'Good morning (Casual)', phonetic: 'Kah-ah-raw', tip: 'Used for friends, classmates, or someone younger than you.' },
      { word: 'Ẹ káàsán', translation: 'Good afternoon (Respectful)', phonetic: 'Eh-kah-ah-san', tip: 'Greeting for mid-day. Pronounce the "sán" with a nasal ring.' },
      { word: 'Ẹ kúalẹ́', translation: 'Good evening (Respectful)', phonetic: 'Eh-koo-ah-leh', tip: 'Greeting for the evening. Keep your tone level high at the end.' },
      { word: 'Pẹlẹ o', translation: 'Hello / Sorry', phonetic: 'Peh-leh aw', tip: 'A general greeting to acknowledge someone, or express sympathy.' },
      { word: 'Ẹ n lẹ o', translation: 'Hello (Respectful / Plural)', phonetic: 'Eh-n-leh aw', tip: 'A polite way to greet an elder or a group of people at once.' },
    ],
  },
  {
    id: 'episode-2',
    episodeNumber: 2,
    title: 'Àwọn Nǹkan Nínú Kíláásì(Classroom items)',
    description: 'Empowering kids to label and speak about their everyday learning environments in their native tongue.',
    duration: '1:31',
    durationSeconds: 91,
    thumbnailColor: 'from-amber-500/90 to-amber-700/95',
    emoji: '🎒',
    videoUrl: '/videos/episode2.mp4',
    vocab: [
      { word: 'Ìwé', translation: 'Book', phonetic: 'Ee-weh', tip: 'Any book, notebook, or written material used for reading and writing.' },
      { word: 'Kálà', translation: 'Pen / Pencil', phonetic: 'Kah-lah', tip: 'The instrument we use to write in our Ìwé.' },
      { word: 'Àga', translation: 'Chair', phonetic: 'Ah-gah', tip: 'A seat designed for sitting in the classroom or at home.' },
      { word: 'Àpótí', translation: 'Desk / Box', phonetic: 'Ah-paw-tee', tip: 'A desk or storage chest. Literally translates to "box".' },
      { word: 'Bọ́dù', translation: 'Board / Chalkboard', phonetic: 'Baw-doo', tip: 'A loanword from English "board". Where the teacher writes lessons.' },
      { word: 'Kíláásì', translation: 'Classroom', phonetic: 'Kee-lah-ah-see', tip: 'Loanword from English "class". The physical or digital learning environment.' },
    ],
  }
];

export default function VideoSeries() {
  const [activeEpId, setActiveEpId] = useState<string>('episode-1');
  const activeEp = episodes.find((e) => e.id === activeEpId) || episodes[0];

  const videoRef = useRef<HTMLVideoElement>(null);

  // Video playback states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(activeEp.durationSeconds);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(80);
  const [activeVocabIdx, setActiveVocabIdx] = useState<number | null>(null);

  // Synchronize source loading when videoUrl changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeEp.videoUrl]);

  // Synchronize playback state
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch((err) => {
        console.log('Playback prevented: ', err);
        setIsPlaying(false);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  // Synchronize volume and mute states
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume / 100;
    }
  }, [isMuted, volume]);

  // Reset video state when active episode changes
  const selectEpisode = (epId: string) => {
    setActiveEpId(epId);
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveVocabIdx(null);
    const newEp = episodes.find((e) => e.id === epId);
    if (newEp) {
      setDuration(newEp.durationSeconds);
    }
  };

  const togglePlay = () => {
    if (currentTime >= duration) {
      setCurrentTime(0);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
    }
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(e.currentTarget.currentTime);
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setDuration(e.currentTarget.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };


  return (
    <section className="py-16 md:py-[100px] bg-gray-50 border-t border-b border-gray-100/80" id="video-hub">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-heading text-[15px] tracking-[0.06em] uppercase rounded-full bg-green-50 text-green-700 border border-green-100 mb-4">
            Video Course
          </span>
          <h2 className="font-heading-two text-[30px] md:text-[44px] text-gray-950 leading-[1.1] mb-5">
            Sweet Yorùbá <span className="text-green-600">Video Modules</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Click on an episode card to load it in the interactive theater. Play the video to follow tutor Morayo&apos;s audio and interactive visual guides, then tap any vocabulary item below to practice your pronunciation!
          </p>
        </div>

        {/* Dual Column Layout: Video Player + Episode Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-16">

          {/* Left: Interactive Video Player */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-video min-h-[280px] rounded-3xl overflow-hidden bg-gray-950 border border-green-600 shadow-sm group">
              {/* HTML5 Video element */}
              <video
                ref={videoRef}
                src={activeEp.videoUrl}
                className="absolute inset-0 w-full h-full object-cover z-10 cursor-pointer"
                playsInline
                controls={false}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                onClick={togglePlay}
              />

              {/* Floating header overlay */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 pointer-events-none select-none">
                <div className="flex gap-2.5 items-center">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                  <span className="text-[10px] text-gray-300 font-semibold tracking-wider bg-gray-900/50 px-2 py-0.5 rounded backdrop-blur-xs uppercase">
                    Lessons Stream
                  </span>
                </div>
                <span className="text-xs text-gray-300 font-medium bg-gray-900/50 px-2.5 py-1 rounded backdrop-blur-xs">
                  Tutor: Morayo A.
                </span>
              </div>

              {/* Thumbnail backdrop when not playing and time is 0 */}
              <AnimatePresence>
                {(!isPlaying && currentTime === 0) && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 bg-gradient-to-br ${activeEp.thumbnailColor} flex flex-col items-center justify-center px-6 pt-6 pb-24 text-center z-30`}
                  >
                    {/* Visual pattern rings */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                      <div className="w-[80%] aspect-square border-2 border-white rounded-full animate-[spin_40s_linear_infinite]" />
                      <div className="w-[60%] aspect-square border border-dashed border-white rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                    </div>

                    <span className="text-2xl mb-4 select-none drop-shadow-md">{activeEp.emoji}</span>
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-green-100 bg-white/10 px-3 py-1 rounded-full mb-3 backdrop-blur-xs">
                      Episode {activeEp.episodeNumber}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold max-w-lg mb-2">
                      {activeEp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-green-100/80 max-w-sm mb-6">
                      Click the play button to start this lesson.
                    </p>

                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center shadow-2xl hover:scale-105 hover:bg-green-50 active:scale-95 transition-all duration-300 border-none cursor-pointer"
                    >
                      <HugeiconsIcon icon={PlayIcon} size={20} className="ml-1 text-green-600" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Center Play Button Overlay when paused mid-video */}
              {!isPlaying && currentTime > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20 transition-all duration-300">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 rounded-full bg-white text-green-700 flex items-center justify-center shadow-2xl hover:scale-105 hover:bg-green-50 active:scale-95 transition-all duration-300 border-none cursor-pointer"
                  >
                    <HugeiconsIcon icon={PlayIcon} size={24} className="ml-1 text-green-600" />
                  </button>
                </div>
              )}


              {/* Video Player Controls (Overlay at bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-4.5 bg-gradient-to-t from-gray-950 via-gray-950/85 to-transparent flex flex-col gap-3.5 z-20">
                {/* Progress bar */}
                <div className="flex items-center gap-3 w-full">
                  <span className="text-[11px] font-mono text-gray-400 select-none">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.1"
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer accent-green-500 focus:outline-none focus:ring-0 [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:appearance-none"
                  />
                  <span className="text-[11px] font-mono text-gray-400 select-none">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Buttons controls bar */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className="p-1 bg-transparent border-none text-white hover:text-green-400 transition-colors cursor-pointer"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <HugeiconsIcon icon={PauseIcon} size={18} />
                      ) : (
                        <HugeiconsIcon icon={PlayIcon} size={18} />
                      )}
                    </button>

                    {/* Restart */}
                    <button
                      onClick={() => {
                        setCurrentTime(0);
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                        }
                        setIsPlaying(true);
                      }}
                      className="p-1 bg-transparent border-none text-gray-400 hover:text-white transition-colors cursor-pointer"
                      aria-label="Restart Video"
                    >
                      <HugeiconsIcon icon={ReloadIcon} size={16} />
                    </button>

                    {/* Volume toggle */}
                    <div className="flex gap-2 items-center group/vol">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-1 bg-transparent border-none text-gray-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <HugeiconsIcon icon={VolumeMuteIcon} size={18} />
                        ) : (
                          <HugeiconsIcon icon={VolumeHighIcon} size={18} />
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => {
                          setVolume(parseInt(e.target.value));
                          setIsMuted(false);
                        }}
                        className="w-0 group-hover/vol:w-16 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer accent-white transition-all duration-300 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none"
                      />
                    </div>
                  </div>

                  {/* Settings / Extra info */}
                  <div className="text-[10px] text-gray-400 font-mono tracking-widest select-none uppercase">
                    1080p • 60fps
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link Buttons */}
            <div className="flex flex-row gap-3 items-center mt-6">
              <Button asChild variant="outline" className="flex-1 sm:flex-initial rounded-full border-gray-100 text-gray-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300  text-sm py-5 px-6 cursor-pointer group">
                <Link
                  href="https://www.facebook.com/p/Native-Academy-61578914925330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <HugeiconsIcon icon={FacebookIcon} size={20} className="text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch more</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 sm:flex-initial rounded-full border-gray-100 text-gray-700 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/30 transition-all duration-300  text-sm py-5 px-6 cursor-pointer group">
                <a
                  href="https://www.instagram.com/reel/DNvaD4wYkUf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <HugeiconsIcon icon={InstagramIcon} size={20} className="text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch more</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Episode Selector */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-lg font-bold text-gray-950 mb-1">
              Select Episode
            </h3>

            <div className="flex flex-col gap-3.5">
              {episodes.map((ep) => {
                const isActive = ep.id === activeEpId;
                return (
                  <button
                    key={ep.id}
                    onClick={() => selectEpisode(ep.id)}
                    className={`p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 w-full bg-white flex items-start gap-4 ${isActive
                      ? 'border-green-600 shadow-[0_10px_25px_-8px_rgba(0,123,55,0.06)] scale-[1.01]'
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                      }`}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ep.thumbnailColor} text-white flex items-center justify-center font-heading font-semibold shrink-0 text-sm shadow-sm`}>
                      EP{ep.episodeNumber}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className={`font-heading text-[14px] font-bold truncate ${isActive ? 'text-green-700' : 'text-gray-900'
                          }`}>
                          {ep.title}
                        </h4>
                        <div className="flex gap-1 items-center text-[10.5px] text-gray-400 shrink-0">
                          <HugeiconsIcon icon={Clock01Icon} size={11} />
                          <span>{ep.duration}</span>
                        </div>
                      </div>
                      <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">
                        {ep.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Stats overview panel */}
            <div className="p-5.5 rounded-2xl bg-white border border-gray-100 flex flex-col gap-3.5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Series Stats</span>
              <div className="flex justify-between items-center py-1 border-b border-gray-50 text-xs text-gray-600">
                <span>Total Modules</span>
                <span className="font-heading font-semibold text-gray-900">2 Modules</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50 text-xs text-gray-600">
                <span>Quiz Status</span>
                <span className="font-heading font-semibold text-amber-600">2 Quizzes Available</span>
              </div>
              <div className="flex justify-between items-center py-1 text-xs text-gray-600">
                <span>Difficulty</span>
                <span className="font-heading font-semibold text-green-700">Beginner Friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Interactive Vocabulary Items */}
        <div className="border-t border-gray-100 pt-12">
          <h3 className="font-heading text-lg sm:text-xl text-gray-950 font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-green-600 rounded-full" />
            Key Vocabulary Covered
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeEp.vocab.map((item, idx) => {
              const isSelected = idx === activeVocabIdx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveVocabIdx(isSelected ? null : idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 text-left flex flex-col gap-2 ${isSelected
                    ? 'bg-green-50/50 border-green-300 shadow-sm'
                    : 'bg-white border-gray-100 hover:border-gray-200'
                    }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-heading text-base font-bold text-gray-950 tracking-tight">
                      {item.word}
                    </span>
                    <span className="text-[10.5px] uppercase font-bold tracking-wider text-green-700 bg-green-50 px-2 py-0.5 rounded-md">
                      {item.phonetic}
                    </span>
                  </div>

                  <div className="text-[13px] text-gray-600 font-medium">
                    {item.translation}
                  </div>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2.5 border-t border-gray-100/70 mt-1 text-[11.5px] text-gray-500 leading-relaxed">
                          <strong>Learning Tip:</strong> {item.tip}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
