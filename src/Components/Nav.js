import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Navabar.css'


class Nava extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-1">
             <Link activeClass="active" to="head"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
         TechPoT</Link>
         </div>
          <div className="nav-2">
          <Link activeClass="active" to="abouts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
         About Us</Link> 

             <Link activeClass="active" to="service"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}>
             Services</Link> 
              <Link activeClass="active" to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Portfolio</Link>
               <Link activeClass="active" to="process"
               spy={true}
               smooth={true}
               offset={0}
               duration={500}>
               Process</Link>
               </div>
      </nav>
    );
  }
}

export default Nava;
