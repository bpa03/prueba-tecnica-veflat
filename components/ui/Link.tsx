import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  children: ReactNode;
  path: string;
}

const Link: FC<LinkProps> = ({ children, path }) => {
  return (
    <NextLink href={path}>
      <span className="font-light text-blue-600 hover:underline inline-block">
        {children}
      </span>
    </NextLink>
  );
};

export default Link;
