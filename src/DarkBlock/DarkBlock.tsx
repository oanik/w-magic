import React from 'react';

import img  from '../assets/not.png';

import './DarkBlock.css';

export const DarkBlock: React.FC = () => {
  return (
  <>
    <div className='dark-header-wrapper'>
      <h1 className="dark-header">WHD</h1>
      <h1 className="dark-header">MGK</h1>
    </div>
      <p className="description-wrapper">
        <img className="image" src={img} alt='not' width={35}/>
        <span className='dark-description'>occult</span>
        <img className="image" src={img} alt='not' width={35}/>
        <span className='dark-description'>evil corporation</span>
      </p>
    </>
  )
}
