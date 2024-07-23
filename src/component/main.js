import React, { useState } from 'react';
import './main.css';
import Plans from './Plans';
import AdCompaign from './Ad';
import LearnImg from './Images/LearnImg.png';
import GuidelinesImg from './Images/GuidelinesImg.png';
import AdCompaignImg from './Images/AdCompaignImg.png';
import SubscriptionImg from './Images/SubscriptionImg.png';
import SubscriptionActiveImg from './Images/SubscriptionActiveImg.png';
import AdCompaignActiveImg from './Images/AdCompaignActive.png';

const MainContent = () => {
  const [activeState, setActiveState] = useState('Subscription');

  return (
    <div className="main-content">
      <div className="main-content-inner">
        <div className="header">
          <span className="title">Sledge Hub</span>
          <span className="links">
            <span>Terms and Condition</span>
            <span>Privacy Policy</span>
            <button className="raise-ticket-btn">Raise Ticket</button>
          </span>
        </div>
        <div className="buttons-wrapper">
          <button
            className={`buttons-main ${activeState === 'Subscription' ? 'buttons-main-active' : ''}`}
            onClick={() => setActiveState('Subscription')}
          >
            <img
              className="Btn-img"
              src={activeState === 'Subscription' ? SubscriptionActiveImg : SubscriptionImg}
              alt="Subscription"
            />
            <span>Subscription</span>
          </button>
          <button
            className={`buttons-main ${activeState === 'AdCompaign' ? 'buttons-main-active' : ''}`}
            onClick={() => setActiveState('AdCompaign')}
          >
            <img
              className="Btn-img"
              src={activeState === 'AdCompaign' ? AdCompaignActiveImg : AdCompaignImg}
              alt="Ad Compaign"
            />
            <span>Ad Compaign</span>
          </button>
          <button className="buttons-main">
            <img className="Btn-img" src={LearnImg} alt="Learn Sledging" />
            <span>Learn Sledging</span>
          </button>
          <button className="buttons-main">
            <img className="Btn-img" src={GuidelinesImg} alt="General Guidelines" />
            <span>General Guidelines</span>
          </button>
        </div>
        {activeState === 'Subscription' && <Plans />}
        {activeState === 'AdCompaign' && <AdCompaign />}
      </div>
    </div>
  );
};

export default MainContent;
