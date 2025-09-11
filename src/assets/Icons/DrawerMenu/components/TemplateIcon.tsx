interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function TemplateIcon({
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
        d='M18 8.33333V5.77778C18 4.79556 17.105 4 16 4H5C3.895 4 3 4.79556 3 5.77778V18.2222C3 19.2044 3.895 20 5 20H9'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 22C14.2389 22 12 19.7611 12 17C12 14.2389 14.2389 12 17 12C19.7622 12 22 14.2389 22 17C22 19.7611 19.7622 22 17 22'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 15V19'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19 17H15'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
