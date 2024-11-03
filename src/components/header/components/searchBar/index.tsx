import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { IconContainer, SearchContainer, SearchInput } from './styles';
import { FaSearch } from 'react-icons/fa';
import { setSearchTerm } from '../../../../store/searchSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTermLocal] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e: { target: { value: string } }) => {
    const term = e.target.value;
    setSearchTermLocal(term);
    dispatch(setSearchTerm(term));
  };

  return (
    <SearchContainer>
      <IconContainer>
        <FaSearch style={{ color: '#f99a99cc', height: 30 }} />
      </IconContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        maxLength={30}
        onChange={handleSearchChange}
        placeholder="Procure por heróis"
      />
    </SearchContainer>
  );
};

export default SearchBar;
