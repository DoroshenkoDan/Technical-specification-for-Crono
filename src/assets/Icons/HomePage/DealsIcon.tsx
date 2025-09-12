import React from 'react';

interface DealsIconProps {
  className?: string;
  size?: number;
}

const DealsIcon: React.FC<DealsIconProps> = ({ className, size = 16 }) => {
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
        d='M7.33337 7.99999H14'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.27583 7.05734C4.7965 7.57801 4.7965 8.42201 4.27583 8.94267C3.75517 9.46334 2.91117 9.46334 2.3905 8.94267C1.86983 8.42201 1.86983 7.57801 2.3905 7.05734C2.91117 6.53667 3.75517 6.53667 4.27583 7.05734'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.33337 3.33333H14'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.01306 3.00533L3.11506 3.99733L5.33306 2'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.33337 12.6667H14'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.27583 11.724C4.7965 12.2447 4.7965 13.0887 4.27583 13.6093C3.75517 14.13 2.91117 14.13 2.3905 13.6093C1.86983 13.0887 1.86983 12.2447 2.3905 11.724C2.91117 11.2033 3.75517 11.2033 4.27583 11.724'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DealsIcon;
