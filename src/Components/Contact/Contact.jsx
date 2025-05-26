import React from 'react'
import Proto from '../../Proto/Proto'
import phone from './../../assets/images/phone.png'
import email from './../../assets/images/email.png'
import loc from './../../assets/images/location.png'

function Contact() {
  const information=[
    {
    img:phone  ,
    call:"call me",
    phone:"0981098728"
   } ,
    {
    img: email ,
    call:"Email me",
    phone:"khadeel596@gmail.com"
   },
    {
    img: loc ,
    call:"Address",
    phone:"Latakia,syria"
   },]

  return (
    <div id="cont">
       <Proto port="contact" mypro="Let's Discuss Your " p="project" />
       <div className='flex flex-col lg:flex-row my-[15px]  justify-between ml-3  '  >
    {/* left section */}
       <div className='flex flex-col gap-10 w-[30%] '>
      {  information.map((ele,index)=>{
      return(
        <div key={index} className='flex gap-4  '>
         <img src= {ele.img}className='w-[61px] h-[56px] p-3 bg-danger  rounded-lg'/>
         <div className='flex flex-col text-[16px]'>
          <h5 className='text-contact dark:text-white'>{ele.call}</h5>
          <h5 className='text-prim dark:text-white'>{ele.phone}</h5>
          </div>
        </div>)})}
        </div>
     

   {/* right section */}
<div className=" mt-4 w-[100%] md:mt-0 md:w-[70%]">
  <from>
    
      <input type="text" placeholder="full name" className="  w-[100%]  sm:w-[48%] h-[36px] border border-solid border-bordercontact rounded-lg  px-[12px] py-[10px]  " />
      <input type="text" placeholder="Your email" className=" w-[100%] mt-3 sm:w-[50%] h-[36px] border border-solid border-bordercontact rounded-lg  px-[12px] py-[10px] sm:ml-[2%]" />
    <input type="number" placeholder='phone number'  className="w-[100%] h-[36px]   border border-solid border-bordercontact rounded-lg  mt-3 px-[12px] py-[10px]"/>
    <input type="text" placeholder="Message" className="w-[100%] h-[115px] border border-solid border-bordercontact rounded-lg  px-[12px]  mt-3"/>
    <button className="bg-danger text-white w-[150px] h-[40px] py-[10px] px-[12px] mt-[15px] rounded-lg hover:scale-75 transition-all ">Send Message</button>
  </from>
  </div>  
  </div>    

    </div>
  )
}

export default Contact
