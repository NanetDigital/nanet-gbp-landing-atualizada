import React from 'react';
import { WHATSAPP_URL } from './Duvidas';

export const WhatsAppFloating: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] flex items-center justify-center transition-all duration-250 ease-out hover:scale-105 active:scale-95 cursor-pointer drop-shadow-md hover:drop-shadow-lg p-0 bg-transparent border-0"
    >
      <img
        src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_100/v1785817194/Design_sem_nome_3_uih02c.png"
        alt="WhatsApp"
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="w-[82%] h-[82%] object-contain block pointer-events-none"
      />
    </a>
  );
};
