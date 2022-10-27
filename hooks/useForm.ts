import { useState, ChangeEvent, FormEvent } from 'react';

type FormElement = HTMLInputElement | HTMLSelectElement;
type ChangeEventType = ChangeEvent<FormElement>;

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEventType) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    values,
    handleChange,
  };
}
