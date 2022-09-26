import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.length;
    return (
        <button className={classes.button} onClick={props.onClickHandler}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;