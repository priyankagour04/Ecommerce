import React from 'react';

const CommonButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, outline, etc.
  disabled = false,
  className = '',
  ...rest
}) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none transition-all duration-300';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
    disabled: 'bg-gray-400 text-gray-700 cursor-not-allowed',
  };

  const combinedStyles = disabled
    ? `${baseStyles} ${variantStyles.disabled}`
    : `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedStyles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CommonButton;
