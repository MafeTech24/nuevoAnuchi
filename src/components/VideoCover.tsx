/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import portadaVideo from '../assets/portadaSitio.mp4';

export default function VideoCover() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToContent = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      id="video-cover"
      className="relative w-full overflow-hidden bg-brand-bg-dark"
    >
      {/* Background Video (archivo local) */}
      <video
        ref={videoRef}
        src={portadaVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto block"
      />

      {/* Opacity Overlay has been removed for better direct presentation */}

      {/* Bouncing scroll indicator at bottom */}
      {/*<motion.button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-brand-cream/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 stroke-[1.5]" />
        </motion.div>
      </motion.button>*/}

      {/* Sound Control Button */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-10 right-6 sm:right-10 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-bg-dark/40 backdrop-blur-md border border-white/10 text-brand-cream hover:bg-brand-bg-dark/60 hover:text-white transition-all cursor-pointer focus:outline-none shadow-lg text-xs font-semibold uppercase tracking-wider"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-brand-cream" />
            <span>Activar sonido</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-brand-cream" />
            <span>Silenciar</span>
          </>
        )}
      </motion.button>
    </section>
  );
}

