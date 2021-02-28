import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CountryItem from '../CountryItem/CountryItem';
import Pagination from '../../Pagination/Pagination';
import Header from '../../Shared/Header';
import Spinner from '../CountryList/Spinner.svg';
import { getCountries } from '../../../redux/Country/CountryActions';
import './CountryList.scss';

const CountryList = ({ getCountries, countries, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [countriesPerPage, setCountriesPerPage] = useState(20);
  const [searchedCountries, setSearchedCountries] = useState([]);

  //Calculate current page items
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  let currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  let currentSearchedCountries = searchedCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line
  }, []);

  const searchCountries = (searchValue) => {
    setCurrentPage(1);
    const searchedCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    if (searchedCountries.length !== 0) {
      setSearchedCountries(searchedCountries);
    }
  };

  const currentCountryList = searchedCountries.length
    ? currentSearchedCountries.map((country) => {
        return <CountryItem country={country} key={country.name} />;
      })
    : currentCountries.map((country) => {
        return <CountryItem country={country} key={country.name} />;
      });

  if (loading) {
    return (
      <div className='loading'>
        <img src={Spinner} alt='loading...' />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header searchCountries={searchCountries} />
      <p className='hint'>Showing 20 countries</p>

      <div className='countries-container'>{currentCountryList}</div>
      <div className='pagination'>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={searchedCountries.length || countries.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries,
  loading: state.loading,
});

const mapDispatchToProps = {
  getCountries,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
