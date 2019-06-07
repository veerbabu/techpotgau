import React , { Component } from 'react';
import styled from 'styled-components';

import './Services.css';


class Services extends Component{
    render(){
        return(
            <div className="services" id="service">
            <h1>SERVICES</h1>
            <h2>what we offer</h2>
            <div className="row">
            <div>
            <span>
            <ion-icon name="phone-portrait"></ion-icon>
            </span>
            <h4>
           react
            </h4>
            <p>
            best app web development
            </p>
            </div>
            <div>
            <span>
            <ion-icon name="appstore"></ion-icon>
           
            </span>
            <h4>
           react
            </h4>
            <p>
            best app web development
            </p>
            </div>
            <div>
            <span>
            <ion-icon name="alarm"></ion-icon>
           
            </span>
             <h4>
            react
             </h4>
             <p>
             best app web development
             </p>
            </div>
             <div>
           <span>
             <ion-icon name="beer"></ion-icon>
            </span>
            <h4>
            react
             </h4>
             <p>
             best app web development  
               <ion-icon name="heart-half"></ion-icon> </p>
             </div>
             </div>
            </div>

         );
   }
}
export default Services;




// import React , { Component } from 'react';
// import { Carousel } from 'react-bootstrap';

// class Services extends Component{
//     render(){
//         return(
//             <div id="service">
//             <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="holder.js/800x400?text=First slide&bg=373940"
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="holder.js/800x400?text=Second slide&bg=282c34"
//                 alt="Third slide"
//               />
          
//               <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src="holder.js/800x400?text=Third slide&bg=20232a"
//                 alt="Third slide"
//               />
          
//               <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
// </div>          
//         )
//     }
// }

// export default Services;














