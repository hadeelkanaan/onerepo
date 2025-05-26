import React from 'react'
import icon from './../../assets/images/Icon.png'
function Cards({card}) {
    
  return (
   <div className='  flex flex-col justify-center  items-center gap-3 md:justify-between md:flex-row mt-4 '>
   {card.map((element,index)=>{
    return(
    <div key={index} className='flex flex-col justify-between  px-3 py-[10px] gap-2 hover:border-[2px] border-yellow-200   hover:rounded-lg'>
      <img src={element.img} alt="" className='w-[350px]  py-1 px-2'/>
      <div className='flex justify-between items-center'>
    <div className='m-2 '>
    <h1>{element.inform}</h1>
    <p>{element.det}</p>
    </div>
      <img src={ icon} className='w-9 cursor-pointer'/>

      </div>
    
    </div>)
   })}
   
   </div>
  )
}

export default Cards
