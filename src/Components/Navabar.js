import React , { Component } from 'react';
import { Nav , Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import './Navabar.css';



// {const styles = {
//     navStyles:{
//         width:'100%',
//         height:'50%',
//         background: 'rgba(0, 103, 172, 0.8)',
//         borderTop: '1px solid rgba(255,255,255,.2)',
//         borderBottom:  '1px solid rgba(185, 199, 168, 0.2)',
//     position:'sticky',
//         top:'0',
//         }
   
// }}
class NavgationBar extends Component{
    render(){
        return(
<Navbar expand="lg" className="navbar">
     <Link activeClass="active" to="head"
     spy={true}
     smooth={true}
     offset={0}
     duration={500}>
     <Navbar.Brand href="/">TechPoT</Navbar.Brand></Link>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-bar" >
      <Nav className="ml-auto"  >
    <Link  activeClass="active" to="abouts"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}> <Nav.Item  ><Nav.Link href="/services">About Us</Nav.Link></Nav.Item></Link>
   <Link 
   activeClass="active" to="service"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            <Nav.Item><Nav.Link href="/contact"><p >Services</p></Nav.Link></Nav.Item></Link>
             <Link
    activeClass="active" to="process"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}> <Nav.Item><Nav.Link href="/about"><p>Process</p></Nav.Link></Nav.Item></Link>
    <Link  activeClass="active" to="portfolio"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}><Nav.Item><Nav.Link href="/"><p >portfolio</p></Nav.Link></Nav.Item></Link>
    </Nav>
         </Navbar.Collapse>
     </Navbar>
     
)
}
}

export default NavgationBar;