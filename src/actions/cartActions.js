import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";


export const addToCart = (items, product) => (dispatch) => {
	const cartItems = items.slice()
  

	let productAlreadyInCart = false


      cartItems.forEach(item => {
        if(item.sku === product.sku){
          productAlreadyInCart = true;
          if(product.audioFormat !== "digital") {
            item.count++
          }
        }
      });
      if(!productAlreadyInCart){
        cartItems.push({...product, count:1})
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return dispatch({type: ADD_TO_CART,
      	payload: {
      		cartItems: cartItems
      	}})

}

export const removeFromCart = (items, product) => (dispatch) => {
   const cartItems = items.slice().filter(elm => elm.sku !== product.sku)

      localStorage.setItem('cartItems',JSON.stringify(cartItems))
      return dispatch({type:REMOVE_FROM_CART, payload: {
      	cartItems
      }})
   
}