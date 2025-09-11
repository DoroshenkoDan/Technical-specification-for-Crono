interface Props {
  size?: number;
  className?: string;
}

export default function ArrowsIcon({ size = 16, className }: Props) {
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
        d='M7 5.33326L4.33333 7.99992L7 10.6666'
        stroke='#7A8395'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 5.33334L8.33333 8L11 10.6667'
        stroke='#7A8395'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
