import React from 'react';
import data from '../../data';
import Products from '../Products/Products';
import CartList from '../Cart/cartList';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addToCartAction} from '../redux/actions/Cart_Action';

class App extends React.Component {
 
  render(){

  return (
    <main className = 'pa3 pa5-ns w-100'>
      <CartList cart={this.props.cart} />
      <Products products={data} addToCartAction={this.props.addToCartAction}/>  
    </main>
    )
  };
}
 const mapStateToProp = (state) =>{
   const {cart} = state;
  return {  cart  }
}

const mapActionToProp = ( dispatch) =>{
  return bindActionCreators({
    addToCartAction  
  },dispatch)
}



export default connect(mapStateToProp,mapActionToProp)(App);