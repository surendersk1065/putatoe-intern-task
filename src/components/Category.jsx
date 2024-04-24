import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

function Category() {
    const bevarges = [
        {
            id: 1,
            name: 'cold Drink',
            off: '10',
            img: 'bev-1.jpg'
        }
    ]
    const fruits = [
        {
            id: 1,
            name: 'Banana',
            off: '5',
            img: 'f6.jpeg'
        }
    ]
    const grocery = [
        {
            id: 1,
            name: 'Aata',
            off: '5',
            img: 'a.jpeg'
        },
        {
            id: 2,
            name: 'Ghee & oil',
            off: '5',
            img: 'ghee.jpeg'
        },
        {
            id: 3,
            name: 'Rice',
            off: '5',
            img: 'r.jpeg'
        },
        {
            id: 4,
            name: 'Chips',
            off: '5',
            img: 'c.jpeg'
        },
    ]
    const veg = [
        {
            id: 1,
            name: 'Pyaj',
            off: '5',
            img: 'v2.jpeg'

        }
    ]
    return (
        <div className='bg-white'>
            <div className='bg-white mx-3 mb-3'>
                <div className='bg-white mx-1 p-2 rounded'>
                    <h1 style={{ color: '#00838f' }}>Shop by Category</h1>
                </div>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='my-3 d-inline-block bev'style={{width:'180px'}}>Bevarages</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            bevarges.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox card' key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                    </div>
                                    <div className='text-center'>
                                        <p className='fw-bolder'>{val.name}</p>
                                        <p>UP To <span className='text-warning'>{val.off}% OFF</span> </p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='bg-white mx-3 mb-3'>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='my-3 d-inline-block bev'style={{width:'180px'}}>Fruits</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            fruits.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox card'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                    </div>
                                    <div className='text-center'>
                                        <p className='fw-bolder'>{val.name}</p>
                                        <p>UP To <span className='text-warning'>{val.off}% OFF</span> </p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='bg-white mx-3 mb-3'>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='my-3 d-inline-block bev'style={{width:'180px'}}>Grocery</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            grocery.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                    </div>
                                    <div className='text-center'>
                                        <p className='fw-bolder'>{val.name}</p>
                                        <p>UP To <span className='text-warning'>{val.off}% OFF</span> </p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='bg-white mx-3 mb-3'>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='my-3 d-inline-block bev' style={{width:'180px'}}>Vegetables</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            veg.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox card'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                    </div>
                                    <div className='text-center'>
                                        <p className='fw-bolder'>{val.name}</p>
                                        <p>UP To <span className='text-warning'>{val.off}% OFF</span> </p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
