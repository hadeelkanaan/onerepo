import React from 'react'
import Cards from '../Cards/Cards'

function ProjectsPage() {
  return (
    <div className='flex flex-col md:flex-row md:justify-center items-center gap-2 px-4 mt-[85px]'>
        {/* left section image */}
        <div>
            <img src='/assets/images/pro22.png' className=' w-[100%]    rounded-lg h-[230px] ' alt=""/>
            </div>
          {/* right section */}
        <div className='parent py-3 px-5 ml-2 '>
            <div className=' gap-2 flex justify-between items-center'>
            <div className='py-2'>
        <h1 className='my-1 text-prim  dark:text-white'>Course Website</h1>
        <p className='my-1 text-batt'> 12-12-2024</p>
      </div>
      <img src="/assets/images/Icon.png" className='w-9 cursor-pointer '/>
            </div>
            <p className='my-1'> A website for an institute offering educational courses for students,
              created using Html5, React and Css,
              and a responsive project on all screens. 
      </p>
    <h2 className='my-1'>Basic Languages:Html5 - Css3 - javascript</h2>
    <h2 className='my-1'>Libraries:React.js</h2>
    <button  className= "bg-danger text-white my-3 text-con w-[130px] py-[10px] px-[12px] rounded-md cursor-pointer flex items-center justify-center gap-[7px] hover:scale-75 duration-200 transition-all">Githup Repo</button>
 
        </div>
      
    </div>
  )
}

export default ProjectsPage
