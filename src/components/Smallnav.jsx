import React from 'react'

function Smallnav() {
    const nav = [
        {
            id: 1,
            img: 'nav1.svg',
            desc: 'Mobile Recharge'
        },
        {
            id: 2,
            img: 'nav2.svg',
            desc: 'News'
        },
        {
            id: 3,
            img: 'nav3.svg',
            desc: 'Jobs'
        },
        {
            id: 4,
            img: 'nav4.svg',
            desc: 'Electricity Bill'
        },
    ]
    return (
        <div className='smallnav'>
            <div className='row nav gx-2  bg-white mx-3 rounded py-3'>
                {
                    nav.map((val) => (
                        <div className='col-3 rounded text-center' key={val.id}>
                            <img
                                src={val.img}
                                className=' mb-2'
                            />
                            <p className='m-0'>{val.desc}</p>
                        </div>


                    ))
                }
            </div>

        </div>
    )
}

export default Smallnav
