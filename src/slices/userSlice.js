import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
  reducers: {
    userAccountInfo: (state, actions) => {
      state.user = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userAccountInfo  } = userSlice.actions

export default userSlice.reducer
