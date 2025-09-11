interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function InboxIcon({
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
        d='M10 18V22H14V18'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 12H7'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.5 8H6.5C4.567 8 3 9.567 3 11.5V17C3 17.552 3.448 18 4 18H20C20.552 18 21 17.552 21 17V11.5C21 9.567 19.433 8 17.5 8Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 5V12'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect
        x='14'
        y='2'
        width='5'
        height='3'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.999 11.625C13.792 11.626 13.625 11.794 13.625 12.001C13.625 12.208 13.793 12.376 14 12.375C14.207 12.375 14.375 12.207 14.375 12C14.375 11.793 14.207 11.625 13.999 11.625'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.5 8C8.433 8 10 9.567 10 11.5V18'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
