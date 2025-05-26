import React from 'react'
import img1 from "./../../assets/images/facebook.png"
import img2 from "./../../assets/images/twitter.png"
import img3 from "./../../assets/images/linkedin.png"
import img4 from "./../../assets/images/instagram.png"

function Footer() {
  const images = [img1, img2, img3, img4]
  return (
    <div className='flex gap-1 flex-col justify-between items-center md:flex-row mt-33   '>
      <p>@ 2025.All Rights Reserved</p>
      <p>Development by Hadeel</p>
      <div className='flex gap-2'>
        {images.map((element, index) => {
          return (
            <div className='py-3' key={index} onClick={ () =>goToFace()}>
              <img src={element}  alt="" className='h-7 w-7 rounded-full bg-danger text-white p-2 cursor-pointer  hover:scale-75 duration-200 transition-all'  />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
