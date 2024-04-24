import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

function Grocery() {
    const grocery = [
        {
            id: 1,
            name: 'Everser dry Ginger s',
            type: 'Spice combo',
            price: 39,
            size: '50g',
            img: 'g1.jpeg'
        },
        {
            id: 2,
            name: 'golden Aamchoor mas',
            type: 'spice Combo',
            price: 22,
            size: '50g',
            img: 'g2.jpeg'
        },
        {
            id: 3,
            name: 'Everest Meat Masala',
            type: 'spice Combo',
            price: 40,
            size: '50g',
            img: 'g3.jpeg'
        },
        {
            id: 4,
            name: 'Nutella Soyabean',
            type: 'Dals & pulses',
            price: 57,
            size: '200g',
            img: 'g4.jpeg'
        },
        {
            id: 5,
            name: 'soyabean',
            type: 'dals & pulses',
            price: 100,
            size: '1 kg',
            img: 'g5.jpeg'
        },
        {
            id: 6,
            name: 'Rajma',
            type: 'Dals & Pulses',
            price: 130,
            size: '1 kg',
            img: 'g6.jpeg'
        },
    ]

    return (
        <div className='bg-white mx-3 mb-3'>
            <div className='bg-white mx-3 p-2 rounded'>
                <div className='d-flex justify-content-between'>
                    <p>Grocery</p>
                    <p>View All</p>
                </div>
            </div>
            <div className=''>
                <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                    {
                        grocery.map((val) => (
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

export default Grocery
