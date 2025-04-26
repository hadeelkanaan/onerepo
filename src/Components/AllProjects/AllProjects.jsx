import React from "react";
import Proto from "../../Proto/Proto";
import Cards from "../Cards/Cards";

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
        img:"assets/images/pro11.png",
        inform:"Products Stor",
        det:"html-css-react-apis"},
      {
        img:"assets/images/pro22.png",
        inform:"Courses Website",
        det:"html-css-react"},
      {
        img:"assets/images/pro33.png",
        inform:"Restorand Menu",
        det:"html-css"}]}/>
    </div>
  );
}

export default AllProjects;
