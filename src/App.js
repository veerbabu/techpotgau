import React , { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Process from './Components/Process';
import Main from './Components/Main';
import Section1 from './Components/Section1';
import Footer from './Components/Footer';



class App extends Component {
  render() {
    return (
     
      <div>
      <Header/>
      <Section1 />
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

