import { createSlice } from '@reduxjs/toolkit'

export const mobileMenuesSlice = createSlice({
  name: 'mobilemenues',
  initialState: {
    value: false,
  },
  reducers: {
    toogleMobile: (state,action) => {
      state.value = action.payload;
      console.log(state.value);
    }
  },
})

// Action creators are generated for each case reducer function
export const { toogleMobile } = mobileMenuesSlice.actions

export default mobileMenuesSlice.reducer