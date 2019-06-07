import React, { Component } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';


class Nava extends Component {
  render() {
    return (
      <nav>
          <ul>
             <Link activeClass="active" to="head"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
           <li><a href="abouts">Tech<span>PoT</span></a></li></Link>
          </ul>
          <ul>
          <Link activeClass="active" to="abouts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          <li><a href="abouts">About us</a></li></Link> 

             <Link activeClass="active" to="service"
             spy={true}
             smooth={true}
             offset={0}
             duration={500}>
             <li><a href="abouts">Services</a></li></Link> 
              <Link activeClass="active" to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
               <li><a href="abouts">portfolio</a></li></Link>
               <Link activeClass="active" to="process"
               spy={true}
               smooth={true}
               offset={0}
               duration={500}>
                <li><a href="abouts">process</a></li></Link>
               </ul>
      </nav>
    );
  }
}

export default Nava;
