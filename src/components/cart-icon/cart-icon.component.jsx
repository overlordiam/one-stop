import React from "react";
import {createStructuredSelector} from "reselect";
import {ReactComponent as Cart} from "../../assets/cart.svg";
import { connect } from "react-redux";
import {selectCartItemCount} from "../../redux/cart/cart.selectors";
import {toggleHiddenCart} from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";


const CartIcon = ({toggleHiddenCart, itemCount}) => (
  <div className = "cart-icon" onClick = {toggleHiddenCart}>
    <Cart className = "shopping-icon"/>
    <span className = "item-count"> {itemCount} </span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
