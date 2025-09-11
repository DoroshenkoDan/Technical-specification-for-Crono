import { Box as MuiBox, BoxProps, styled } from '@mui/material';

interface CustomBoxProps extends Omit<BoxProps, 'variant'> {
  variant?: 'rounded' | 'outlined';
}

const StyledBox = styled(MuiBox)<CustomBoxProps>(({ variant }) => {
  const baseStyles = {};

  const variantStyles: Record<string, any> = {
    rounded: {
      borderRadius: '16px',
      backgroundColor: 'var(--bg-primary)',
      border: '1px solid var(--primary-40)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    outlined: {
      border: '2px solid var(--primary-60)',
      borderRadius: '8px',
      padding: '12px',
      backgroundColor: 'transparent',
      '&:hover': {
        borderColor: 'var(--accent-primary)',
        backgroundColor: 'var(--bg-secondary)',
      },
    },
  };

  return {
    ...baseStyles,
    ...(variant && variantStyles[variant]),
  };
});

export const Box = StyledBox;
