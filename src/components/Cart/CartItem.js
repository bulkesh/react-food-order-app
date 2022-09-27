import { useState, useEffect } from 'react';
import classes from './CartItem.module.css';
const CartItem = props => {
    const [maxIsReach, setMaxIsReach] = useState(false);
    const price = '$' + props.price;
    const totalAmount = props.amount;

    useEffect(() => {
        if (totalAmount >= 5) {
            setMaxIsReach(true);
        }
        const timer = setTimeout(() => {
            setMaxIsReach(false);
        }, 2000);

        return (() => {
            clearInterval(timer);
        })

    }, [totalAmount]);

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}> x {props.amount}</span>
                </div>
                {maxIsReach && <span>Max order limit is 5.</span>}
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemoveItem}>-</button>
                <button onClick={props.onAddItem}>+</button>
            </div>
        </li>
    )
}
export default CartItem;