import { useState } from 'react';

import { IconContainer, SearchContainer, SearchInput } from './styles';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContainer>
      <IconContainer>
        <FaSearch style={{ color: ' #f99a99cc', height: 30 }} />
      </IconContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        maxLength={30}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Procure por heróis"
      />
    </SearchContainer>
  );
};

export default SearchBar;
