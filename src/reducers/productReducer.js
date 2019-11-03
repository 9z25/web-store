import { FETCH_PRODUCTS, FETCH_MUSIC, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../actions/types";


const initialState = { items:[], filteredItems: [], size: '', music: [], filteredMusic: []}
export default function(state = initialState, action){
	switch(action.type){
		case FETCH_PRODUCTS:
		console.log("ran")
			return {...state, items: action.payload, filteredItems: action.payload }
		case FETCH_MUSIC:
			return {...state, music: action.payload, filteredMusic: action.payload }
		case FILTER_PRODUCTS_BY_SIZE:
			return {...state, filteredItems: action.payload.items, size: action.payload.size }
		case ORDER_PRODUCTS_BY_PRICE:
			return {...state, filteredItems: action.payload.items, sort: action.payload.sort }
		
		default:
			return state
	}

}