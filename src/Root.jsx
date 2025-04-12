import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Hero from'./Components/Hero/Hero'
import IntroSection from './Components/IntroSection/IntroSection'
import Eduction from './Components/Eduction/Eduction'
import Box from './Components/Box/Box'
import AllProjects from './Components/AllProjects/AllProjects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



function Root() {
  return (
    <div className="w-widthpro md:mx-auto font-popp  ">
      <Navbar
        logo="Hadeel"
         sho={true}/>
      <Hero
        hey="HEY! "
        add="I’m Hadeel,  Frontend Developer"
        para="Agency-quality Webflow websites with the personal touch of a freelancer."
        btn="Download Cv"
      />
      <div className="border-b border-dashed border-secondary mt-33"></div>
     <About/>
      <IntroSection
        items={[
          {
            content: "Education and Experience",
            tit: "Education & Experience",
          },
        ]}
      />
      <Eduction/>
      <Box
        conten="Try me out, risk free!"
        context="  if you're not happy with the design after the first draft, i'll refund deposit ,no questions asked"
        btn=" contact"
      />
     <AllProjects/>
      <Contact/>
   
      <div className="border-b " />
      <Footer/>
      
      </div>)}

   export default Root