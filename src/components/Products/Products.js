import React from 'react'; 
import Product from './product';

class Products extends React.PureComponent {
  
  

  addToCart = (product) =>{
    this.props.addToCartAction(product)
  } 

  render(){
    const productCollection = this.props.products;
    return(
      <div className =' w-80 flex flex-wrap justify-between'>
        {productCollection.map( product => <Product key = {product.id} {...product} addfunc={(this.addToCart)} /> )}
      </div>
    )
  }
}
export default Products;