import React, { Component } from 'react';

class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            // <div className="product-container">
            //     <div className="products">
            //         <div className="product-image">
            //             <img  src={product.image} />
            //         </div>
            //         <div className="product-description">
            //             <p className="desc">{product.description}</p>
            //         </div>
            //         <div className="button-cart">

            //             {
            //                 this.state.inCart?(
            //                     <span className="btn btn-success">Added to cart</span>
            //                 ) : (
            //                     <a href="#" onClick={this.addToCart} className="buttonn">Add to cart</a>
            //                 )
            //             }

            //             <div className="product-price">
            //                 <span className="price-new">RS{product.price}</span>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className='pro-container'>
                    <div className='row'>
                        
                            <div className="col-3" key={product.id}>
                                <div className="producto">
                                <div className="pro_image">
                                   <img src={product.image} alt="image name" /> 
                                   
                                </div>  
                                <div className="product_name">
                                    {product.name}
                                </div>
                                <div className="row">
                                <div className="col-6">
                                    <div className="product-prize">
                                    RS {product.price}
                                    </div>
                                </div>
                               <div className="button-cart">
                               {
                            this.state.inCart?(
                                <span className="btn btn-success">Product Added</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="buttonn"><button>Add to Cart</button></a>
                            )
                        }  
                               </div>
                                </div>
                                
                                </div>
                            </div>
                  
                    </div>
                </div>

        )
    }
}

export default Product;