import React from "react";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import {selectCartItemCount} from "../../redux/cart/cart.selectors";
import {toggleHiddenCart} from "../../redux/cart/cart.actions";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
  <CartContainer onClick={toggleHiddenCart}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);