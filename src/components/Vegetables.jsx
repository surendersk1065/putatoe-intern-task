import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

function Vegetables() {

    const vegetables = [
        {
            id: 1,
            name: 'Lahsun',
            type: 'Lahsun',
            price: 30,
            size: '250g',
            img: 'v1.jpeg'
        },
        {
            id: 2,
            name: 'Pyaj',
            type: 'Pyaj',
            price: 30,
            size: '1kg',
            img: 'v2.jpeg'
        },
        {
            id: 3,
            name: 'Aalu',
            type: 'Aalu',
            price: 20,
            size: '1 piece',
            img: 'v3.jpeg'
        },
        {
            id: 4,
            name: 'Lauki',
            type: 'Lauki',
            price: 40,
            size: '1kg',
            img: 'v4.jpeg'
        },
        {
            id: 5,
            name: 'bhindi',
            type: 'bhindi',
            price: 40,
            size: '1 kg',
            img: 'v5.jpeg'
        },
        {
            id: 6,
            name: 'Karela',
            type: 'Karela',
            price: 40,
            size: '1 kg',
            img: 'v6.jpeg'
        },
    ]
    return (
        <div className='bg-white mx-3 mb-3'>
            <div className='bg-white mx-3 p-2 rounded'>
                <div className='d-flex justify-content-between'>
                    <p>Fruits</p>
                    <p>View All</p>
                </div>
            </div>
            <div className=''>
                <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                    {
                        vegetables.map((val) => (
                            <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox' key={val.id}>
                                <div className='imagecontainer'>
                                    <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                    <span className='share'><CiShare2 /></span>
                                    <span className='d-inline-block bg-danger text-white px-4 rounded offer'>3% off</span>
                                    <span className='add'><MdAddBox /></span>
                                </div>
                                <p>{val.name}</p>
                                <p className='fw-bolder'>{val.name}</p>
                                <p>{val.type}</p>
                                <p className='fw-bolder mb-2'>&#8377;{val.price} <span className='text-decoration-line-through'>M.R.P &#8377; {(val.price) + 20}</span></p>
                                <p className='mb-1'>In stock</p>
                                <div className='d-flex justify-content-between'>
                                    <p>unit-1</p>
                                    <p className='d-inline-block size px-2 rounded'>{val.size}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}

export default Vegetables
