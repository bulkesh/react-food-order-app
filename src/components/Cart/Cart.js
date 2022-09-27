import { useContext} from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../Shared/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
   
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const onAddItemHandler = item => {
        console.log("amount : ",item.amount);
        if(item.amount === 5){
            return;
        }
        const updateItem = {
            ...item,
            amount: item.amount + 1
        }
        //console.log("updateItem : ",updateItem);
        cartCtx.addItem(updateItem);
    } 
    const onRemoveItemHandler = id => {
        cartCtx.removeItem(id);
    } 
    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAddItem={onAddItemHandler.bind(null,item)}
                    onRemoveItem={onRemoveItemHandler.bind(null,item.id)} />
            ))

        }
    </ul>
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;