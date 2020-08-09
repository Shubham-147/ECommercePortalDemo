import React from 'react';
import Cart from './cartItem';

class CartList extends React.PureComponent {

  render() {
    console.log(this.props)
    const {cart} = this.props;
    return(
      <ul className="list pl0 mt0 measure center">
        {
          cart ? cart.map(item => <Cart {...item} key={item.id} /> ):null
        } 
    </ul>
    )
  }

}

export default CartList;