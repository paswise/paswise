import React, {useState, useEffect} from 'react';
import './App.css';

import { FiGithub, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';

 function App() {
  return (
    <div className="App">
      <div style={{padding: 30}}>
        <div>
          <p className="title">Paswise</p>
        </div>
        <div>
          <p className="coming">Coming Soon</p>
          <p className="des">Cooking this Website.<br/> Stay Tuned 🤟</p>
        </div>
        <div>
          <iframe src="https://paswise.substack.com/embed" 
            width="100%" 
            height="100" 
            style={{marginTop: 25}}
            frameborder="0" 
            scrolling="no"
            title="subscribe" />
        </div>
        <div className="icons">
          <FiGithub className="icon" size='35' onClick={() => window.open("https://github.com/paswise")} />
          <FiInstagram className="icon" size='35' onClick={() => window.open("https://www.instagram.com/paswise")} />
          <FiTwitter className="icon" size='35' onClick={() => window.open("https://twitter.com/paswise")} />
          <FaTiktok className="icon" size='35' onClick={() => window.open("https://www.tiktok.com/@paswise")} />
          <FiYoutube className="icon" size='35' onClick={() => window.open("https://www.youtube.com/channel/UCR1_HH-Xo7_GtpUj0mrrvoQ")} />
          <BsCashCoin className="icon" size='35' onClick={() => window.open("https://paswise.gumroad.com/l/supportmonthly")} />
        </div>
      </div>
    </div>
  );
}

export default App;