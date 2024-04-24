import React, { useEffect, useState } from 'react'

function ImageSlider() {
    
    const image =  ['bg-img.png','bg-img-2.png','bg-img-3.jpeg','bg-img-4.jpeg','bg-img-5.jpeg','bg-img-6.jpeg',]   
    const [img, setImg] = useState(null)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImg(image[Math.floor(Math.random() * image.length)]);
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [])

  return (
    <div className='slider'>
      <img 
        src = {img}
      />
    </div>
  )
}

export default ImageSlider
