import React from "react";
import Proto from "../../Proto/Proto";
import Cards from "../Cards/Cards";
import pro11 from './../../assets/images/pro11.png'
import pro22 from './../../assets/images/pro22.png'
import pro33 from './../../assets/images/pro33.png'

function AllProjects() {
  return (
    <div id="pro">
      <Proto
        port="portfolio"
        mypro="My Creative Works Latwst"
        p="projects"
        btn="View Githup"
        show={true}
      />
      <Cards card={[
      {
        img:pro11,
        inform:"Products Stor",
        det:"html-css-react-apis"},
      {
        img: pro22,
        inform:"Courses Website",
        det:"html-css-react"},
      {
        img:pro33,
        inform:"Restorand Menu",
        det:"html-css"}]}/>
    </div>
  );
}

export default AllProjects;
