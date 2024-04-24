import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

function Products() {

    const bevarage = [
        {
            id: 1,
            name: 'Frooti',
            type: 'Cold drink',
            price: 33,
            size: '600ml',
            img: 'bev-1.jpg'
        },
        {
            id: 2,
            name: 'Pepsi',
            type: 'Cold drink',
            price: 76,
            size: '2 litre',
            img: 'bev-2.jpg'
        },
        {
            id: 3,
            name: 'thumpsup',
            type: 'Cold drink',
            price: 38,
            size: '750ml',
            img: 'bev-3.jpeg'
        },
        {
            id: 4,
            name: 'sprite',
            type: 'Cold drink',
            price: 38,
            size: '750ml',
            img: 'bev-4.jpg'
        },
    ]

    return (
        <div className='bg-white mx-3 mb-3'>
            <div className='bg-white p-2 mx-3 rounded mt-3'><h1 style={{ color: '#00838f' }}>Popular Products</h1></div>
            <div className='bg-white mx-3 p-2 rounded'>
                <div className='d-flex justify-content-between'>
                    <p>Bevarages</p>
                    <p>View All</p>
                </div>
            </div>
            <div className=''>
                <div className='d-flex mb-2' style={{ overflowX: 'auto'}}>
                    {
                        bevarage.map((val) => (
                            <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox'key={val.id}>
                                <div className='imagecontainer'>
                                    <img src={val.img} style={{ width: '200px',height:'200px' }} className=''/>
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

export default Products
