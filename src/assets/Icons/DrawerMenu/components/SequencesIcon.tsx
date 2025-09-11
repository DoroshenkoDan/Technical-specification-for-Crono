interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function SequencesIcon({
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
        d='M20 12V20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.6992 14.67V20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 17V20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.29981 13.6V20'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.9386 8.50854C16.622 9.19195 16.622 10.3 15.9386 10.9834C15.2552 11.6668 14.1471 11.6668 13.4637 10.9834C12.7803 10.3 12.7803 9.19195 13.4637 8.50854C14.1472 7.82512 15.2552 7.82512 15.9386 8.50854'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.3419 4.00554C22.0253 4.68896 22.0253 5.797 21.3419 6.48041C20.6585 7.16383 19.5505 7.16383 18.8671 6.48041C18.1836 5.797 18.1836 4.68895 18.8671 4.00554C19.5505 3.32213 20.6585 3.32213 21.3419 4.00554'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.13197 9.40255C5.81538 10.086 5.81538 11.194 5.13197 11.8774C4.44855 12.5608 3.34051 12.5608 2.6571 11.8774C1.97368 11.194 1.97368 10.086 2.6571 9.40255C3.34051 8.71913 4.44856 8.71913 5.13197 9.40255'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5363 4.90056C11.2197 5.58398 11.2197 6.69202 10.5363 7.37543C9.85285 8.05885 8.7448 8.05885 8.06139 7.37543C7.37798 6.69202 7.37798 5.58397 8.06139 4.90056C8.74481 4.21715 9.85285 4.21715 10.5363 4.90056'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.7691 6.35999L16.0391 8.62999'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
