interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function PromotionIcon({
  color = 'currentColor',
  size = 12,
  className,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.0861 11.0297H2.91299C2.40817 11.0297 1.99846 10.62 1.99846 10.1152V5.08598C1.99846 4.58116 2.40817 4.17145 2.91299 4.17145H9.08519C9.59001 4.17145 9.99972 4.58116 9.99972 5.08598V10.1152C9.99972 10.62 9.59001 11.0297 9.0861 11.0297Z'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.99985 4.17145V10.5705'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.06259 4.17148C6.58845 4.17148 7.67492 4.00138 8.36539 3.28255C8.87387 2.75395 8.87387 1.89612 8.36539 1.3666C7.85691 0.838004 7.03291 0.838004 6.52443 1.3666C5.74616 2.17688 6.06259 4.17148 6.06259 4.17148Z'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.936 4.17146C5.41015 4.17146 4.32368 4.00135 3.63321 3.28253C3.12473 2.75393 3.12473 1.8961 3.63321 1.36658C4.14169 0.837066 4.96568 0.83798 5.47416 1.36658C6.25243 2.17686 5.936 4.17146 5.936 4.17146Z'
        stroke={color}
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
