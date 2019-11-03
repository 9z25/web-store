import { ADD_TO_CART } from "../actions/types";
import { REMOVE_FROM_CART } from "../actions/types";


const initialState = { items: [] }
export default function(state = initialState, action){
	switch(action.type){
		case ADD_TO_CART:
			return {
				items: action.payload.cartItems
			}
		case REMOVE_FROM_CART:
			return {
				items: action.payload.cartItems
			}
		default:
			return state;
	}

}