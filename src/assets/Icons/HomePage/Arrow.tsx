import React from 'react';

interface ArrowIconProps {
  className?: string;
  size?: number;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ className, size = 16 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 4L10 8L6 12'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowIcon;
