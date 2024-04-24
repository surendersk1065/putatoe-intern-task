import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

function Dairy() {
    const dairy = [
        {
            id: 1,
            name: 'Anik Ghee',
            type: 'Ghee',
            price: 74,
            size: '100ml',
            img: 'd1.jpeg'
        },
        {
            id: 2,
            name: 'Gyan Lassi',
            type: 'Lassi',
            price: 17,
            size: '100ml',
            img: 'd2.jpeg'
        },
        {
            id: 3,
            name: 'Gyan mattha',
            type: 'mattha',
            price: 10,
            size: '300ml',
            img: 'd3.jpeg'
        },
        {
            id: 4,
            name: 'Gyan meetha Dahi...',
            type: 'curd',
            price: 20,
            size: '200g',
            img: 'd4.jpeg'
        },
        {
            id: 5,
            name: 'Gyan Dahi',
            type: 'curd',
            price: 35,
            size: '400g',
            img: 'd5.jpeg'
        },
        {
            id: 6,
            name: 'Gyan Paneer',
            type: 'Paneer',
            price: 86,
            size: '200g',
            img: 'd6.jpeg'
        },
        {
            id: 7,
            name: 'Gyan Butter',
            type: 'Butter',
            price: 56,
            size: '100g',
            img: 'd7.jpeg'
        },
    ]
    return (
        <div className='bg-white mx-3 mb-3'>
            <div className='bg-white mx-3 p-2 rounded'>
                <div className='d-flex justify-content-between'>
                    <p>Dairy Product</p>
                    <p>View All</p>
                </div>
            </div>
            <div className=''>
                <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                    {
                        dairy.map((val) => (
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

export default Dairy
