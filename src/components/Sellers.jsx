import React from 'react'
import { GrLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


function Sellers() {
    const bevarges = [
        {
            id: 1,
            shop: 'Ghanshyam Provisions',
            name: 'Harwah fatak',
            type: 'provison dairy and household goods',
            rate: '3.9',
            img: 'gg.jpeg'
        }
    ]
    const fruits = [
        {
            id: 1,
            shop: 'Green store',
            name: 'basharatpur',
            type: 'i provide all service',
            rate: '4.9',
            img: 'gg.jpeg'
        }
    ]
    const grocery = [
        {
            id: 1,
            shop: 'Ghanshyam Provisions',
            name: 'Harwah fatak',
            type: 'provison dairy and household goods',
            rate: '3.9',
            img: 'gg.jpeg'
        },
        {
            id: 2,
            shop: 'Krishna Complex',
            name: '^ civil lines',
            type: 'i provide all service',
            rate: '5.0',
            img: 'k.png'
        },
        {
            id: 3,
            shop: 'Spencers',
            name: '6 civil lines',
            type: 'i provide all service',
            rate: '4.2',
            img: 's.png'
        },
        {
            id: 4,
            shop: 'Hamsub mart',
            name: '6 civil lines',
            type: 'i provide all service',
            rate: '4.9',
            img: 'h.png'
        },
    ]
    const veg = [
        {
            id: 1,
            shop: 'Green store',
            name: 'basharatpur',
            type: 'i provide all service',
            rate: '4.9',
            img: 'gg.jpeg'

        }
    ]
    const dairy = [
        {
            id: 1,
            shop: 'shree Naryanan',
            name: 'Harwah fatak',
            type: 'provison dairy and household goods',
            rate: '5.0',
            img: 'gg.jpeg'
        },
        {
            id: 2,
            shop: 'Imran Raeeni...',
            name: '^ civil lines',
            type: 'i provide all service',
            rate: '5.0',
            img: 'i.png'
        },
        {
            id: 3,
            shop: 'Kari sarvani',
            name: '6 civil lines',
            type: 'i provide all service',
            rate: '4.4',
            img: 'k.png'
        },
        {
            id: 4,
            shop: 'Tanya Kumari',
            name: '6 civil lines',
            type: 'i provide all service',
            rate: '4.1',
            img: 't.png'
        },
    ]
    return (
        <div className="bg-white">
            <div className='bg-white mx-3 mb-3'>
                <div className='bg-white mx-1 p-2 rounded'>
                    <h3 style={{ color: '#00838f' }} className='fw-bold'>Best Sellers for Daily Needs</h3>
                </div>
                <div className=''>
                    <div className='text-center'>
                        <h3 className='my-3 d-inline-block bev' style={{ width: '180px' }}>Bevarages</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            bevarges.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox card'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                        {/* <span className='share'><CiShare2 /></span> */}
                                        <span className='d-inline-block text-white px-4 rounded offer' style={{ backgroundColor: '#00838f' }}>{val.rate}<FaStar className='ms-2 star text-white' /></span>
                                        {/* <span className='add'><MdAddBox /></span> */}
                                    </div>
                                    <p>{val.shop}</p>
                                    <p className='fw-bolder'>{val.name}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p style={{ width: '200px' }}>{val.type}</p>
                                        <span>
                                            <GrLocation className='fs-4 d-block' />
                                            <>20km</>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span style={{ backgroundColor: '#00838f' }} className='p-2 rounded'><span className='me-2'><FaPhoneAlt className='me-2 fs-5 text-white' /></span><span className=''><MdMessage className='fs-5 text-white mess h-100' /></span></span>
                                        <div>
                                            <span><CiShare2 className='fs-1' /></span>
                                        </div>
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
                        <h3 className='my-3 d-inline-block bev' style={{ width: '180px' }}>Dairy Product</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            dairy.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                        {/* <span className='share'><CiShare2 /></span> */}
                                        <span className='d-inline-block text-white px-4 rounded offer' style={{ backgroundColor: '#00838f' }}>{val.rate}<FaStar className='ms-2 star text-white' /></span>
                                        {/* <span className='add'><MdAddBox /></span> */}
                                    </div>
                                    <p>{val.shop}</p>
                                    <p className='fw-bolder'>{val.name}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p style={{ width: '200px' }}>{val.type}</p>
                                        <span>
                                            <GrLocation className='fs-4 d-block' />
                                            <>20km</>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span style={{ backgroundColor: '#00838f' }} className='p-2 rounded'><span className='me-2'><FaPhoneAlt className='me-2 fs-5 text-white' /></span><span className=''><MdMessage className='fs-5 text-white mess h-100' /></span></span>
                                        <div>
                                            <span><CiShare2 className='fs-1' /></span>
                                        </div>
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
                        <h3 className='my-3 d-inline-block bev' style={{ width: '180px' }}>Fruits</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            fruits.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox card'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                        {/* <span className='share'><CiShare2 /></span> */}
                                        <span className='d-inline-block text-white px-4 rounded offer' style={{ backgroundColor: '#00838f' }}>{val.rate}<FaStar className='ms-2 star text-white' /></span>
                                        {/* <span className='add'><MdAddBox /></span> */}
                                    </div>
                                    <p>{val.shop}</p>
                                    <p className='fw-bolder'>{val.name}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p style={{ width: '200px' }}>{val.type}</p>
                                        <span>
                                            <GrLocation className='fs-4 d-block' />
                                            <>20km</>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span style={{ backgroundColor: '#00838f' }} className='p-2 rounded'><span className='me-2'><FaPhoneAlt className='me-2 fs-5 text-white' /></span><span className=''><MdMessage className='fs-5 text-white mess h-100' /></span></span>
                                        <div>
                                            <span><CiShare2 className='fs-1' /></span>
                                        </div>
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
                        <h3 className='my-3 d-inline-block bev' style={{ width: '180px' }}>Grocery</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            grocery.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                        {/* <span className='share'><CiShare2 /></span> */}
                                        <span className='d-inline-block text-white px-4 rounded offer' style={{ backgroundColor: '#00838f' }}>{val.rate}<FaStar className='ms-2 star text-white' /></span>
                                        {/* <span className='add'><MdAddBox /></span> */}
                                    </div>
                                    <p>{val.shop}</p>
                                    <p className='fw-bolder'>{val.name}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p style={{ width: '200px' }}>{val.type}</p>
                                        <span>
                                            <GrLocation className='fs-4 d-block' />
                                            <>20km</>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span style={{ backgroundColor: '#00838f' }} className='p-2 rounded'><span className='me-2'><FaPhoneAlt className='me-2 fs-5 text-white' /></span><span className=''><MdMessage className='fs-5 text-white mess h-100' /></span></span>
                                        <div>
                                            <span><CiShare2 className='fs-1' /></span>
                                        </div>
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
                        <h3 className='my-3 d-inline-block bev' style={{ width: '180px' }}>Vegetables</h3>
                    </div>
                    <div className='d-flex mb-2' style={{ overflowX: 'auto' }}>
                        {
                            veg.map((val) => (
                                <div className=' me-3 mx-3 px-3 pb-2 rounded imagebox card'key={val.id}>
                                    <div className='imagecontainer'>
                                        <img src={val.img} style={{ width: '200px', height: '200px' }} className='' />
                                        {/* <span className='share'><CiShare2 /></span> */}
                                        <span className='d-inline-block text-white px-4 rounded offer' style={{ backgroundColor: '#00838f' }}>{val.rate}<FaStar className='ms-2 star text-white' /></span>
                                        {/* <span className='add'><MdAddBox /></span> */}
                                    </div>
                                    <p>{val.shop}</p>
                                    <p className='fw-bolder'>{val.name}</p>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <p style={{ width: '200px' }}>{val.type}</p>
                                        <span>
                                            <GrLocation className='fs-4 d-block' />
                                            <>20km</>
                                        </span>
                                    </div>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <span style={{ backgroundColor: '#00838f' }} className='p-2 rounded'><span className='me-2'><FaPhoneAlt className='me-2 fs-5 text-white' /></span><span className=''><MdMessage className='fs-5 text-white mess h-100' /></span></span>
                                        <div>
                                            <span><CiShare2 className='fs-1' /></span>
                                        </div>
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

export default Sellers
