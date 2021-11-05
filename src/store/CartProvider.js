import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

    const addItemToCartHandler=item=>{}
    const removeItemToCartHandler=item=>{}
    const cartContext={
        item:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
    }
    return <CartContext.Provider value={...cartContext}>
        {props.children}
    </CartContext.Provider>;
}

export default CartProvider
