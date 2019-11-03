import React from 'react';
import util from '../util';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart} from '../actions/cartActions';

class Products extends React.Component {
	 componentWillMount(){
       //this.props.fetchProducts()
  }
    render(){
    	const productItems = this.props.products.map((product, i) => (
    		<div className="col-md-4" key={product.id}>

    		<div className="thumbnail text-center">
    		  <a href={`#${product.id}`} onClick={() => this.props.addToCart(this.props.cartItems,product)} key={product.id}>
    		    <img src={`../public/products/${product.sku}_2.jpg`} alt={product.title} key={product.id}/>
    		    <p>
    		    {product.title}
    		    </p>
    		  </a>
    		  <div>
    			<b>{util.formatCurrency(product.price)}</b>
    			<button className="btn btn-primary"
    			onClick={() => this.props.addToCart(this.props.cartItems,product)} key={product.id}>Add to cart</button>
    		</div>
    		</div>
    		
    		</div>
    		)



    		)
       return(
           <div className="row">

           {productItems}

           </div>   
        )
     }
}


const mapStateToProps = state => ({products: state.products.filteredItems,
  sort: state.products.sort,
  cartItems: state.cart.items})


export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);