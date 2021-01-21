import HomeScreen from '../screens/HomeScreen'
import Navbar from './Navbar'

const Products = () =>{
  
    return(
        <div className="newproducts">
            <Navbar/>
            <div className="mewhome">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <HomeScreen/> 
            </div>
             
        </div>
    )
}
 
export default Products;























































// <div className='container'>
                     
                   
// <div className='products'>
//   {products.map((products)  => (
//       <div className='product' key={products.id}>
//    <div className='product-image' key={products.id}>
//        <img src={products.image} alt='not found' />
//        </div>
//        <div className='products-details'>
//         <div className='products-name'> 
//             {products.name}
//         </div>
//         <div className='products-prize'>
//     RS {products.price}.00
//         </div>
//        </div>
//        {/* <div className='add-to-cart'>
//            Add To Cart 
//        </div> */}

//     </div>
//   ))} 
// </div>
// </div>