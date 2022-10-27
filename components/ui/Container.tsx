import { FC, ReactNode } from 'react'
 
interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto py-10">
      {children}
    </div>
  )
}

export default Container;