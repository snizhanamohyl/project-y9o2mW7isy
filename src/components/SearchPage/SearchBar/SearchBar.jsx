import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchPage/SearchForm/SearchForm';
import SearchTypeSelector from 'components/SearchPage/SearchTypeSelector/SearchTypeSelector';

export default function SearchBar({ isLoading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type');

  const handleSubmit = e => {
    e.preventDefault();
    const request = e.target[0].value;
    if (request === '') return console.log('Request cannot be empty');
    setSearchParams({ type: type ? type : 'query', query: request });
  };

  const handleChange = e => {
    setSearchParams({ query: query ? query : '', type: e });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} query={query} isLoading={isLoading} />
      <SearchTypeSelector onChange={handleChange} type={type} />
    </>
  );
}
