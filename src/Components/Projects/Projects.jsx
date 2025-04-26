import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import Proto from '../../Proto/Proto'

function Projects() {
  return (
    <div  className='w-widthpro md:mx-auto'>
       <Navbar
              logo="Hadeel"/>
              <ProjectsPage/>
              <div className="border-b border-dashed border-secondary mt-33"></div>
              <Proto
             port="portfolio"
             mypro="the Best "
             p="projects"/>
              <Cards  card={[
      {
       img:"assets/images/pro11.png",
        inform:"Products Stor",
        det:"html-css-react-apis"},
      {
        img:"assets/images/pro33.png",
        inform:"Courses Website",
        det:"html-css-react"},
      ]}/>
              <Footer/>
      
    </div>
  )
}

export default Projects
