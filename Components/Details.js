import React ,{useEffect} from 'react'
// import Navbar from './Navbar'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"


const Details = () => {
    const id =useParams();
    console.log(id);
    const dispatch=useDispatch();
    const {product}= useSelector(state => state.ProductsReducer);
    console.log(product);
    useEffect(() => {
        dispatch({ type:'PRODUCT' , id});
},[id]);
    return (
        <div className="detail-container mt-100">
            <div className="row">
=                <div>
                    <div className="col-6">
                        <div className="details-image">
                            <img src={`/images/${product.image}`} alt=""/>
                        </div>

                    </div>

                    <div className="col-6">

                    </div>
                </div>
     
            </div>
            
        </div>
    )
}

export default Details
