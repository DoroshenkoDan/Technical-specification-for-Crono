interface DeleteIconProps {
  className?: string;
  size?: number;
}

export default function DeleteIcon({ className, size = 24 }: DeleteIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M6 7.66075H18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.143 7.66064V17.0892C17.143 18.0364 16.3758 18.8035 15.4287 18.8035H8.57152C7.62438 18.8035 6.85724 18.0364 6.85724 17.0892V7.66064'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.5716 4.8751H9.42871'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.2858 11.0894V15.3751'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.7137 11.0894V15.3751'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
