import React from 'react';
import '../stylesheets/Title.css'

const Title = ({ logo, text }) => {
  return(
    <div className='logo-container'>
      <h1>{text}</h1>
      <img
        className='logo'
        src={logo}
        alt={`${text} logo`}
      />
    </div>
  );
}

export default Title;