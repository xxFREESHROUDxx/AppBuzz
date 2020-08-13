import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room, typing, user, recip }) => {
  
  return(
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <span>{room}</span>
      <div className="pt-1 px-2">{recip ? recip.map((rec,i)=><span key={i}>{rec.name},</span> ) : null}</div>
      <span className="px-2">{typing ? (typing === user) ? null: typing +" is typing..." : null}</span>
    </div>
    <div className="rightInnerContainer">
      <div className="px-2">
      <h6>{recip.length} People</h6>
      </div>
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);
}

export default InfoBar;