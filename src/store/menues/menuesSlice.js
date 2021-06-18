import { createSlice } from '@reduxjs/toolkit'

export const menuesSlice = createSlice({
  name: 'menues',
  initialState: {
    value: false,
  },
  reducers: {
    toogle: (state,action) => {
      state.value = action.payload;
      console.log(state.value);
    }
  },
})

// Action creators are generated for each case reducer function
export const { toogle } = menuesSlice.actions

export default menuesSlice.reducer