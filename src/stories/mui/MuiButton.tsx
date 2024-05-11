import React from 'react';
import './muiButton.css';
import Button from '@mui/material/Button';

interface ButtonProps {
  primary?: true;
  variant?: 'text' | 'contained' | 'outlined';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  color?: 'primary' | 'secondary' | 'inherit' | 'success' | 'error' | 'info' | 'warning' | undefined;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MuiButton = ({
  variant = 'outlined',
  size = 'medium',
  color = 'primary',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button type='button' variant={variant} size={size} color={color} style={{ backgroundColor }} {...props}>
      {label}
    </Button>
  );
};
