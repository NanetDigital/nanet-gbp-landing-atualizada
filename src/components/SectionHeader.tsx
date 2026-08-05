import React from 'react';

interface SectionHeaderProps {
  sectionNumber?: number;
  tag: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6 ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
        <span className="font-semibold tracking-wide uppercase">{tag}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
};

