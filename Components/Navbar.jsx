import React, { Component } from 'react'
import Cosmo from '../images/logos.png'
import { useHistory,Link } from "react-router-dom";
import { BsFillBucketFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar(){

        const history=useHistory();
        
        // this.props.cartUpdated();

        // let total = 0;

        // this.props.cart.map(item => total += item.product.price * item.quantity);
        return ( 
            
            <div className='navbar'>
            <div className='n_Container'>
            <div className='nav_container'>

            <div className='nav-left'>
            <Link to={`/`}>
            <img src={Cosmo} alt=""/>
            </Link>
            </div>
                <div className='nav-right'>                

                   <h5 >
                   <h5 onClick={()=>history.push('/')}>Home</h5></h5>
            
                
                   <h5 >
                   <h5 onClick={()=>history.push('/Cover')}>About Us</h5></h5>
             

          
                   <h5 >
                   <h5 onClick={()=>history.push('/Contact')}>Contact Us</h5></h5>

                   <h5 >
                   <h5 onClick={()=>history.push('/producto')}>Products</h5></h5>
            
{/* 
                   <Link to='/my-cart'>
                    <div className="basket">
                   
                    <BsFillBucketFill className="cart-icon" title="Cart" />
                   
                    </div>
                </Link> */}
                    <Link to="/cart">
                                {/* {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">{ this.props.cart.length } items: (RS{total.toFixed(2)})</span>
                                    ) : null
                                } */}
                                <div className="carto">
                               
                              <BsFillBucketFill className="cart-icon" title="Cart"   /><span>My Cart</span>
                              
                              </div>
                             
                              </Link>
                             


                    <h5 >
                        
                    <button  onClick={()=>history.push('/login')}>
                       Login 
                    </button>
                    </h5>

            </div> 

        </div>
        </div>
        </div>
         );
    }
    // const mapStateToProps = (state) => {

    //     return {
    //         cart: state.cart.cart,
    //         cartUpdated: () => { return true }
    //     }
    // };
    
    export default Navbar;
    // connect(mapStateToProps)
 
