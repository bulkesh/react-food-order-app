import Modal from '../Shared/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[
        {
            id: "m1",
            name: "Sushi",
            amount: 2,
            price: 22.99
        },
        {
            id: "m2",
            name: "Schnitzel",
            amount: 1,
            price: 16.5
        },
        {
            id: "m3",
            name: "Barbecue Burger",
            amount: 3,
            price: 12.99
        },

    ].map(item => <li>{item.name}</li>)}</ul>
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>25.54</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;