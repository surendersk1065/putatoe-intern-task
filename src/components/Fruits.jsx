import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

function Fruits() {

    const fruits = [
        {
            id: 1,
            name: 'Mango',
            type: 'Mango',
            price: 480,
            size: '5kg',
            img: 'f1.jpeg'
        },
        {
            id: 2,
            name: 'Pomegranate',
            type: 'Pomegranate',
            price: 650,
            size: '5kg',
            img: 'f2.jpeg'
        },
        {
            id: 3,
            name: 'Kiwi',
            type: 'Kiwi',
            price: 240,
            size: '2kg',
            img: 'f3.jpeg'
        },
        {
            id: 4,
            name: 'Lychee',
            type: 'Lychee',
            price: 180,
            size: '2kg',
            img: 'f4.jpeg'
        },
        {
            id: 5,
            name: 'Coconut(Naariyal)',
            type: 'Coconut',
            price: 145,
            size: '5 pieces',
            img: 'f5.jpeg'
        },
        {
            id: 6,
            name: 'Ripe Banana',
            type: 'Banana',
            price: 250,
            size: '50 pieces',
            img: 'f6.jpeg'
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
                        fruits.map((val) => (
                            <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox'key={val.id}>
                                <div className='imagecontainer'>
                                    <img src={val.img} style={{ width: '200px',height:'200px' }} className='' />
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

export default Fruits
