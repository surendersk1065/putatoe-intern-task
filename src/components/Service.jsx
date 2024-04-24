import React from 'react'

export default function Service() {
  return (
    <div className='container'>
        <div className=''>
        <h1 style={{ color: 'white',backgroundColor:'#00838f' }} className='fw-bolder p-2'>All Subservices</h1>
        </div>
      <div className='row service'>
        <div className='col-6 mb-3'>
            <img src='grocery.jpeg' />
            <p>Grocery</p>
            <span className='text-white bg-warning px-2 rounded'>20% off</span>
        </div>
        <div className='col-6 mb-3'>
            <img src='bev.jpeg' />
            <p>Bevarages</p>
            <span className='text-white bg-warning px-2 rounded'>20% off</span>
        </div>
        <div className='col-6 mb-3'>
            <img src='d.jpeg' />
            <p>Dairy Products</p>
            <span className='text-white bg-warning px-2 rounded'>20% off</span>
        </div>
        <div className='col-6 mb-3'>
            <img src='f.jpeg' />
            <p>fruits</p>
            <span className='text-white bg-warning px-2 rounded'>20% off</span>
        </div>
        <div className='col-6 mb-3'>
            <img src='v.jpeg' />
            <p>vegetables</p>
            <span className='text-white bg-warning px-2 rounded'>20% off</span>
        </div>
      </div>
    </div>
  )
}
