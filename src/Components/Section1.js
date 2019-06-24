import React from 'react';
import { Link } from 'react-scroll';


export default class Section1 extends React.Component {
        render(){
            return(
                <div className="head">
                <div className="head-content">
                
                <h1>we innovate next big thing</h1>
                     
                <p>become a techpot and be a part of our innovative garden</p>
   
          <Link activeClass="active" className="contact" to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          Contact Us</Link>
                      </div>
                      </div>
                 
            );
        }
}