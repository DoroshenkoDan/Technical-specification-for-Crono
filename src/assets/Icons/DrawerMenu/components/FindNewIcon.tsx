interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function FindNewIcon({
  color = 'currentColor',
  size = 24,
  className,
}: Props) {
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
        d='M16.2443 6.1008C19.0454 8.90186 19.0454 13.4433 16.2443 16.2443C13.4433 19.0454 8.90186 19.0454 6.1008 16.2443C3.29973 13.4433 3.29973 8.90186 6.1008 6.1008C8.90186 3.29973 13.4433 3.29973 16.2443 6.1008'
        stroke={color}
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.0002 19.9999L16.2402 16.2399'
        stroke={color}
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
