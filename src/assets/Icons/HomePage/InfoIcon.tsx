import React from 'react';

interface InfoIconProps {
  className?: string;
  size?: number;
}

const InfoIcon: React.FC<InfoIconProps> = ({ className, size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7.99902 4.889C7.89202 4.889 7.80502 4.976 7.80502 5.083C7.80502 5.19 7.89202 5.277 7.99902 5.277C8.10602 5.277 8.19302 5.19 8.19302 5.083C8.19402 4.976 8.10702 4.889 7.99902 4.889'
        stroke='CurrentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 15V15C4.134 15 1 11.866 1 8V8C1 4.134 4.134 1 8 1V1C11.866 1 15 4.134 15 8V8C15 11.866 11.866 15 8 15Z'
        stroke='CurrentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 8V11.889'
        stroke='CurrentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default InfoIcon;
