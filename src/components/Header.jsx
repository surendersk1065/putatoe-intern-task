import React from 'react'
import { GrLocation } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { AiTwotoneAudio } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <>
      <div style={{ backgroundColor: '#00838f' }} >
        <div className=' container d-flex justify-content-between text-white align-items-center py-3'>
          <div className=''>
            <GrLocation className='fs-1'/>
          </div>
          <div className=''>
            <input
              type='text'
              placeholder='Harhwa Fatak Nirala Nagar...'
              className='location rounded px-2'
            />
          </div>
          <div className='position'>
            <IoMdNotificationsOutline className='fs-1'/>
            <span className='bg-danger px-2 rounded'>0</span>
          </div>
          <div className='position2'>
            <MdAddShoppingCart className='fs-1'/>
            <span className='bg-danger px-2 rounded'>0</span>
          </div>
        </div>

      </div>
      <div style={{ backgroundColor: '#00838f' }} className='sticky-top py-3'>
        <div className='d-flex container justify-content-between text-white align-items-center px-4'>
          <div className="search">
            <span className="icon"><IoIosSearch className='fs-5 fw-bolder' /></span>
            <input type="text" className="form-control" placeholder="Search for Products..." />
          </div>
          <div>
          <AiTwotoneAudio className='fs-1'/>
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default Header
