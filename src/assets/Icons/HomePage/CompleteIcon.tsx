interface CompleteIconProps {
  className?: string;
  size?: number;
}

export default function CompleteIcon({
  className,
  size = 24,
}: CompleteIconProps) {
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
        d='M8.228 11.222L12.005 15L19.68 7.325C18.1 4.735 15.256 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C16.632 21 20.443 17.5 20.941 13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
