import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [], 
        totalQuantity: 0
    },
    reducers: {
        addToCart(state, action){
            const theItem = action.payload
            const itemInCart = state.cart.find((item) => item.id === theItem.id);
            if(itemInCart){
                itemInCart.quantity++;
                itemInCart.totalPrice += theItem.price
            }else{
                state.cart.push({...action.payload, quantity:1, totalPrice: theItem.price})
            }
            state.totalQuantity++
        },
        removeCart(state, action){
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem
        },
        incrementItem(state, action){
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            itemInCart.quantity++;
            itemInCart.totalPrice += itemInCart.price
        },
        decrementItem(state,action){
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if(itemInCart == 1){
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem
            } else {
                itemInCart.quantity--;
                itemInCart.totalPrice -= itemInCart.price
            }
        }


    }
})

export const {addToCart,removeCart,incrementItem,decrementItem} = cartSlice.actions


export default cartSlice.reducer
