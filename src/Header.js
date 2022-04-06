import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Header = () => {
  return (


    // BEM
    <div className='header'>

      <PersonIcon className='header__icon' fontSize='large'/>
      <FitnessCenterIcon fontSize='large'/>
      <MessageIcon className='header__icon' fontSize='large'/>
    </div>
  )
}

export default Header;