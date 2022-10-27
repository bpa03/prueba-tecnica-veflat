import { FC, ChangeEventHandler } from 'react';

interface InputProps {
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  name?: string;
  label?: string;
  id?: string;
}

const Input: FC<InputProps> = ({ handleChange, id, name, type, label }) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
