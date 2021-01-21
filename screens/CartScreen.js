import './CartScreen.css'
import CartItem from '../component/CartItem'
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import {addToCart, removeFromCart} from '../redux/actions/cartActions'
import Navbar from '../Components/Navbar'

const CartScreen = () => {
    const dispatch=useDispatch();

    const cart=useSelector(state => state.cart);
    const {cartItems} = cart; 
    const qtyChangeHandler =(id,qty) => {
        dispatch(addToCart(id,qty));
    }
    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount =() => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty,0);
    }
    
    const getCartSubTotal = () => {
        return cartItems.reduce((price,item)=> item.price * item.qty + price,0)
    }
    return (
        <div className="nava">
            <Navbar/>
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Cart is Empty😐
                        <br/>
                        Please Add products to your cart😊
                        <Link to='/producto'><button>Go Back</button></Link>

                    </div>
                ): cartItems.map(item => (
                    <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                ))
                
                }
                
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)} </p>
                </div>
                <div>
                    <Link to='/login'>
                    <button  >
                        Proceed to checkout
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CartScreen
