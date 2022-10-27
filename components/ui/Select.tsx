import { FC, ChangeEventHandler, ReactNode } from 'react';

interface SelectProps {
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
  children?: ReactNode;
  name?: string;
  label?: string;
  id?: string;
}

const Select: FC<SelectProps> = ({
  handleChange,
  id,
  name,
  label,
  children,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
