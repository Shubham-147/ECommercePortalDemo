export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCartAction({id, productName, desc, img, price, addfunc}) {
  return {
    type :ADD_TO_CART,
    payload: {id, productName, desc, img, price, addfunc}
  }
}