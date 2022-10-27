import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {} 

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
    className="text-white block bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    {...rest}
  >
    {children}
  </button>
  );
};

export default Button;
