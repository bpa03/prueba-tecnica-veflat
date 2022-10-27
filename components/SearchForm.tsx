import { FC, FormEvent } from 'react';
import useForm from '../hooks/useForm';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

interface FormValues {
  name: string;
  status: 'alive' | 'dead' | 'unknown' | '';
}

interface SearchFormProps {
  submitCallback: (form: FormValues) => void;
}

const SearchForm: FC<SearchFormProps> = ({ submitCallback }) => {
  const { values, handleChange } = useForm<FormValues>({
    name: '',
    status: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    submitCallback(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:w-96 space-y-5">
        <Input
          type="text"
          name="name"
          handleChange={handleChange}
          label="Find by name"
        />
        <Select
          name="status"
          handleChange={handleChange}
          id="status"
          label="Choose an status"
        >
          <>
            <option value="">Choose a status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </>
        </Select>
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
