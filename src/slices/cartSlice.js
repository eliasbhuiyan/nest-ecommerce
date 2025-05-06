import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cart.push(actions.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart  } = cartSlice.actions

export default cartSlice.reducer
