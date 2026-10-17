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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      id="video-cover"
      className="relative w-full h-[calc(100dvh-68px)] md:h-[calc(100vh-72px)] mt-[68px] md:mt-[72px] overflow-hidden bg-brand-bg-dark"
    >
      {/* Video de portada full cover adaptable */}
      <video
        ref={videoRef}
        src={portadaVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-[center_12%] sm:object-[center_15%] md:object-center block"
      />

      {/* Botón de control de sonido - Solo ícono circular en extremo inferior izquierdo */}
      <motion.button
        onClick={toggleMute}
        className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-20 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-all cursor-pointer focus:outline-none shadow-xl"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
        title={isMuted ? 'Activar sonido' : 'Silenciar'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </motion.button>
    </section>
  );
}

