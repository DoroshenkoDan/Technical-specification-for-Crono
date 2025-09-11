interface Props {
  color?: string;
  size?: number;
  className?: string;
}

export default function PrefixIcon({
  color = 'currentColor',
  size = 24,
  className,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 3 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1.41464e-06 0L1.58735e-08 32C1.65685 32 3 30.6569 3 29L3 3C3 1.34315 1.65686 7.24234e-08 1.41464e-06 0Z'
        fill={color}
      />
    </svg>
  );
}
