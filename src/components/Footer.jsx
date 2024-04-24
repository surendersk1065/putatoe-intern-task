import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className='container d-flex justify-content-between sticky-bottom bg-white'
    style={{color:'#00838f'}}>
      <div>
        <div className='text-center fs-3'><IoMdHome /></div>
        <p>Home</p>
      </div>
      <div>
        <div className='text-center fs-3'><IoPerson /></div>
        <p>Profile</p>
      </div>
      <div>
        <div className='text-center fs-3 logo mt-2'><img src='img 1.png' className='rounded'/></div>
      </div>
      <div>
        <div className='text-center fs-3'><RiFileList3Line /></div>
        <p>Follow List</p>
      </div>
      <div>
        <div className='text-center fs-3'><IoChatbubbleEllipsesOutline /></div>
        <p>Chat</p>
      </div>
    </div>
  )
}

export default Footer
