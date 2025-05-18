import React from 'react';
import '../pages/Homepage.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import logo from '../assets/images/google logo.webp';
import Search from '../pages/Searchpage.js';

function Home() {
  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-headerleft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home-header-right'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon/>
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img src={logo} alt="logo of spectra" />
        <div className="input_container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
