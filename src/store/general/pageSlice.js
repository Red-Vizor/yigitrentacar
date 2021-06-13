import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: "homepage",
  },
  reducers: {
    updatePage: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updatePage } = pageSlice.actions

export default pageSlice.reducer