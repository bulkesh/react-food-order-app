import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultcartState = {
    items: [],
    totalAmount: 0,
}

const cartreducer = (state, action) => {
    let updatedItems;
    switch (action.type) {
        case 'ADD_ITEM':
            console.log("state : ",state);
           
            let updatedTotalAmount = 0;
            const existingcartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = state.items[existingcartItemIndex];
            if (existingCartItem) {
                if(existingCartItem.amount < action.item.amount){
                    const increasedBy = action.item.amount - existingCartItem.amount;
                    console.log("increased By : ",increasedBy);
                    updatedTotalAmount = state.totalAmount + (action.item.price * increasedBy);
                }else{
                    const decreasedBy = existingCartItem.amount - action.item.amount;
                    console.log("decreased By : ",decreasedBy);
                    updatedTotalAmount = state.totalAmount - (action.item.price * decreasedBy);
                }
                
                const updatedItem = {
                    ...existingCartItem,
                    amount:action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingcartItemIndex] = updatedItem;
            } else {
                updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        case 'REMOVE_ITEM':
            const existingItemIndex = state.items.findIndex(item => item.id === action.id);
            const existingItem = state.items[existingItemIndex];
            let updateTotalAmount = state.totalAmount - existingItem.price;
            if(updateTotalAmount <= 0){
                updateTotalAmount = 0;
            }
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            } else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1
                }
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount
            }
        default:
            break;

    }
    return defaultcartState;
}

const CartProvider = props => {
    const [casrtState, dispatchCartAction] = useReducer(cartreducer, defaultcartState);

    const addItemToCart = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    };
    const removeItemFromCart = id => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
    };
    const cartContext = {
        items: casrtState.items,
        totalAmount: casrtState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;