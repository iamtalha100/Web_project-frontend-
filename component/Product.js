import "./Product.css"
import lo from  "../images/Products/lotion.jpg"
import { Link,BrowserRouter} from "react-router-dom";

import React from 'react'

const Product = ({imageUrl,name,price,description,productId}) => {
    return (
        <div className='product'>
            <img src={imageUrl} alt="product-name" />

            <div className="product_info">
                <p className="info_name">{name}</p>
                <p className="info_description">{description}</p>
                <p className="info_price">${price}</p>
            <Link to={`/product/${productId}`} ><button className="product_info_button">View</button></Link>
            </div>
        </div>
    )
}

export default Product
