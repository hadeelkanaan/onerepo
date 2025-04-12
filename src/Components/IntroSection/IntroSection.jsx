import React from 'react'

function IntroSection({items}) {
  return (
    <>
    {items.map((element,index)=>{
        return(
            <div key={index} className='  w-[40%] mx-auto sm:w-introsection mt-33'  id="ed" >
                <h3 className='font-semibold text-danger '>{element.content}</h3>
                <div className='border-b border-dashed border-danger'/>     
                <h1 className='font-semibold text-me'>{element.tit}</h1>

            </div>
        )
    })}
  </>
  )
}

export default IntroSection
