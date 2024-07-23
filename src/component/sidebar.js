import React from 'react';
import './sidebar.css';
import Logo from "./Images/Logo.svg"
import HomeImg from "./Images/HomeImg.svg"
import ChatsImg from "./Images/ChatsImg.svg"
import HostImg from "./Images/HostImg.png"
import PostImg from "./Images/PostImg.png"
import Sledgeimg from "./Images/Sledgeimg.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={Logo}/>
      <div>
        <img src={HomeImg}/>
      </div>
      <div>
        <img src={ChatsImg}/>
      </div>
      <div>
        <img src={HostImg}/>
      </div>
      <div>
        <img src={PostImg}/>
      </div>
      <img className='Sledgeimg' src={Sledgeimg}/>
    </div>
  );
};

export default Sidebar;
