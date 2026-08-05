import React from 'react';

export const MediaPlaceholderBox: React.FC<{
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
}> = ({
  label = '[Placeholder: Elemento Visual / Frame]',
  sublabel = '[16:9 • Wireframe de Interface / Demo]',
  className = '',
}) => {
  return (
    <div
      className={`w-full bg-neutral-100 dark:bg-neutral-900 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[220px] sm:min-h-[300px] ${className}`}
    >
      <div className="w-12 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-500 mb-3">
        <svg
          className="w-6 h-6 stroke-current fill-none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      </div>
      <span className="text-xs sm:text-sm font-mono font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mt-1">
        {sublabel}
      </span>
    </div>
  );
};

export const IconPlaceholder: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className={`inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded text-neutral-500 shrink-0 ${className}`}>
      <span className="text-[10px] font-mono">✦</span>
    </div>
  );
};

export const AvatarPlaceholder: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <div className={`rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-400 font-mono text-xs ${className}`}>
      [Avatar]
    </div>
  );
};
