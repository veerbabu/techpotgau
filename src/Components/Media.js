import { css } from 'styled-components';
import React , { Component } from 'react'
import styled from 'styled-components';
 const sizes ={
     desktop:992,
     tablet:768,
     phone:576
 };

 
const media = Object.keys(sizes).reduce((acc,label)=>{
    acc[label] = (...args) => css`
    @media(maxwidth:${sizes[label] / 16}em){
        ${css(...args)}
    }
    `;
    return acc;
},{});
const Content = styled.div`
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

class Media extends Component{
    render(){
        return(
            <Content />
        )
        }
}

export default Media;
