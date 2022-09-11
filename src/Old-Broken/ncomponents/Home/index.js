import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderPhoto from '../../assets/images/header-photo.png';
import './index.scss';

const Home = () => {
  return (
    <div className='container home-page'>
      <img src={HeaderPhoto} alt="me!" />
    </div>
  );
};

export default Home;
