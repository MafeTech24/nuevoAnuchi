/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppFloatingButton() {
  const whatsappNumber = '5493515557316';
  const messageText = 'Hola Ana, vi tu sitio web profesional. Me gustaría hacerte una consulta.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none select-none">


      {/* Botón Flotante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
        className="pointer-events-auto relative"
      >
        {/* Anillo de pulso sutil de fondo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
          aria-label="Escribir por WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.101-2.885-6.963C16.78 1.916 14.305.892 11.674.892c-5.437 0-9.863 4.42-9.866 9.864-.001 1.902.501 3.753 1.456 5.4l-.995 3.637 3.733-.979zm11.367-5.632c-.3-.15-1.77-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.205-.6-2.18-1.04-3.033-2.505-.225-.385.225-.357.643-1.19.075-.15.038-.282-.018-.393-.056-.113-.477-1.15-.654-1.575-.172-.412-.372-.356-.51-.363-.13-.006-.28-.008-.43-.008-.15 0-.395.056-.6.28-.205.224-.78.764-.78 1.86s.797 2.155.91 2.305c.113.15 1.564 2.388 3.79 3.35.528.228.94.365 1.262.467.53.169 1.01.144 1.39.088.422-.061 1.285-.525 1.465-1.03.18-.505.18-.938.125-1.03-.055-.09-.205-.14-.505-.29z" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}
