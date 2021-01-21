import React, { Component } from 'react';
import FB from '../images/Products/facebook.png'
import Twitter from '../images/Products/twitter.png'
import Insta from '../images/Products/instagram.png'


class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Footer">
                <div className='d-inline-flex justify-content-center '>
                <img className='social' src={FB} alt=""/>
                <img className='social' src={Twitter} alt=""/>
                <img className='social' src={Insta} alt=""/>
                </div>

                <h6 className='text-center'>@2020 Copyright © Abid Store</h6>
            </div>
         );
    }
}
 
export default Footer;