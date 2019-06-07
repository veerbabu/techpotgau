import React, { Component } from 'react';
import Nava from "./Nav";
import { Link } from 'react-scroll';
import styled from 'styled-components';
//import Nedia from './Media';
import { css } from 'styled-components';

class Header extends Component {
  render() {
    return (
     <header>
     <Nava/>
    <div className="head">
      <h1>we innovate next big thing</h1>
            <div>
<p>become a techpot and be a part of our innovative garden</p>
<Link activeClass="active" to="contact"
spy={true}
smooth={true}
offset={0}
duration={500}>
 <div><a className="contact" href="#">Contact Us</a></div></Link>
            </div>
        </div>
       </header>
      
      
    );
  }
}

export default Header;
