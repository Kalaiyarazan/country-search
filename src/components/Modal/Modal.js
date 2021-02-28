import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

ReactModal.setAppElement('#root');

const Modal = ({ country, modalIsOpen, setModalIsOpen }) => {
  const {
    flag,
    name,
    capital,
    region,
    population,
    timezones,
    currencies,
    languages,
  } = country;

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div className='modal-container'>
        <div className='modal-header'>
          <h2>{name}</h2>
          <button onClick={() => setModalIsOpen(false)}> X </button>
        </div>

        <hr />

        <div className='flag'>
          <img src={flag} alt='flag' height='100px' width='150px' />
        </div>

        <div className='country-detail-container'>
          <div className='group'>
            <div className='content-group'>
              <h3>Capital</h3>
              <h1>{capital}</h1>
            </div>
            <div className='content-group'>
              <h3>Region</h3>
              <h1>{region}</h1>
            </div>
            <div className='content-group'>
              <h3>Population</h3>
              <h1>{population}</h1>
            </div>
          </div>

          <div className='group'>
            <div className='content-group'>
              <h3>Timezone</h3>
              <h1>{timezones}</h1>
            </div>
            <div className='content-group'>
              <h3>Currency</h3>
              <h1>
                {currencies[0].code} ({currencies[0].symbol})
              </h1>
            </div>
            <div className='content-group'>
              <h3>Language</h3>
              <h1>{languages[0].name}</h1>
            </div>
          </div>
        </div>

        <div className='button'>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
