import React, { useState } from 'react';

import Modal from '../../Modal/Modal';
import './CountryItem.scss';

const CountryItem = ({ country }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { name, capital, flag } = country;

  if (modalIsOpen) {
    return (
      <Modal
        country={country}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    );
  }

  return (
    <div
      className='country-item-container'
      onClick={() => setModalIsOpen(true)}
    >
      <div className='country-header'>
        <div className='country-flag'>
          <img src={flag} alt='flag' srcset='' />
        </div>
        <div className='country-name-capital'>
          <h3 className='country-name'>{name}</h3>
          <h5 className='capital-name'>{capital}</h5>
        </div>
      </div>
      <div className='country-body'>
        <h4>Population</h4>
        <h1>2387637</h1>
      </div>
    </div>
  );
};

export default CountryItem;
