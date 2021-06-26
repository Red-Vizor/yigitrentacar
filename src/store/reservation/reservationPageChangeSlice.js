import { createSlice } from '@reduxjs/toolkit'

export const reservationPageChangeSlice = createSlice({
  name: 'reservationPageChange',
  initialState: {
    value: 0,
  },
  reducers: {
    
    changePage: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePage } = reservationPageChangeSlice.actions

export default reservationPageChangeSlice.reducer