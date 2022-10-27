import { FC, ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-3.5 py-1.5 rounded">
      {children}
    </span>
  );
};

export default Badge;
