import React from 'react';
import util from '../util';
import { connect } from 'react-redux';
import {removeFromCart} from '../actions/cartActions';

class Basket extends React.Component {
    render(){
    	const {cartItems} = this.props;
       return(
           <div className="alert alert-info">
            {cartItems.length===0? " Basket is empty": <div> You have {cartItems.length} products in the basket.</div>}
              {cartItems.length>0 && 
              	<div>
              		<ul>
              			{cartItems.map(item =>
              				<li key={item.count}>
              					<b>{item.title}</b>
              					X {item.count} = {item.price * item.count}
              					<button id={item.count} className="btn btn-danger"
              					onClick={() => this.props.removeFromCart(this.props.cartItems,item)}
              					>X</button>
              					</li>)}
              		</ul>
              		Total: {util.formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0 ))}
              		<br/>
              		<button className="btn btn-primary" onClick={() => alert("Checkout needs to implement.")}>Checkout</button>
              	</div>

              }
           </div>   
        )
     }
}
const mapStateToProps = state =>({
	cartItems: state.cart.items
})
export default connect(mapStateToProps, {removeFromCart})(Basket);