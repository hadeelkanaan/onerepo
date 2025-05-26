import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import Proto from '../../Proto/Proto'
import card1 from './../../assets/images/pro11.png'
import card2 from './../../assets/images/pro33.png'

function Projects() {
  return (
    <div  className='w-widthpro md:mx-auto'>
       <Navbar
              logo="Hadeel"/>
              
              <ProjectsPage/>
              <div className="border-b border-dashed border-secondary mt-33"/>
              <Proto
             port="portfolio"
             mypro="the Best "
             p="projects"/>
              <Cards  card={[
      {
       img: card1,
        inform:"Products Stor",
        det:"html-css-react-apis"},
      {
        img:card2,
        inform:"Courses Website",
        det:"html-css-react"},
      ]}/>
              <Footer/>
      
    </div>
  )
}

export default Projects
