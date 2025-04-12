import React from 'react'

function Footer() {
  const images = ["/assets/images/facebook.png", "/assets/images/twitter.png", "/assets/images/linkedin.png", "/assets/images/instagram.png"]
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
