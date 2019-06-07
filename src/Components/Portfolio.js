import React , { Component }from 'react';
import './Portfolio.css';
import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper=styled.div`
width:100%
padding:32px
padding-top: 120px
padding-bottom: 120px
  background-color: transparent
  text-align: center
  `;

const Page=styled.div`
width:100%

padding-top: 120px;
padding-bottom: 120px;`;

class Portfolio extends Component{
  render(){
    return(
      <Wrapper id="portfolio">
      <Slider
      speed={500}
      slideToShow={1}
      slidesToScroll={1}
      infinite={true}
      dots={true}
      >
      <Page>react</Page>
      <Page>reactNative</Page>
      <Page>flutter</Page>
      </Slider>
      </Wrapper>
    );
  }

}
  
export default Portfolio;


