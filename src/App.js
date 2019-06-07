import React , { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Process from './Components/Process';
import Main from './Components/Main';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import styled from 'styled-components';
//import  Media  from './Components/Media';

// const Container= styled.div`
// ${media.desktop`background-color:black;`}
// `

class App extends Component {
  render() {
    return (
     
      <div className="container">
      
      <Header />
      <Aboutus/>
      <Services/>
      <Portfolio/>
      <Process/>
      <Main/>
      <Footer/>
    </div>
    

    );
  }
}

export default App;

