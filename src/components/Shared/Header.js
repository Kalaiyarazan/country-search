import { useEffect, useState } from 'react';

import './Header.scss';

const Header = ({ searchCountries }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    searchCountries(searchValue);
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <div className='header-container'>
      <div className='header-logo'>
        <h3>
          <a href='/'>Country Search</a>
        </h3>
      </div>
      <div className='header-search'>
        <input
          type='text'
          name='search'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search Countries...'
        />
      </div>
    </div>
  );
};

export default Header;
