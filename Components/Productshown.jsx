import React, { Component } from 'react'
import Navbar from './Navbar'
import About from './About'




class Cover extends Component {
    state = {  }
    render() { 
        return ( 

            <div className='main'>
                <Navbar/> 
             <br/>
             <br/>
             <br/>
            <div className='about'>
            <h1>
                 About Us
             </h1>
           
            <p className='paratext'>
            
          
                We deal in all types of cosmetic good.
                <br/>
                We also have store near band road.
                <br/>
                But now we started an online store
                <br/>
                Come here and enjoy with us
            </p>
            </div>
            <h1>Our Products</h1>
            <About/>
            
            </div>

            
        );
    }
}

export default Cover;