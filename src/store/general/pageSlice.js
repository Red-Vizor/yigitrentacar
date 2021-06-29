import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: "homepage",
    popularLocations:1,
    pophead:"",
    pop1:"",
    pop2:"",
    pop3:"",
    mappop:"",
    imagePop:"",
    workHour:"",
  },
  reducers: {
    updatePage: (state, action) => {
      state.value = action.payload
    },
    selectPopularLocation: (state, action) => {
      state.popularLocations = action.payload
    },
    selectPopHead: (state, action) => {
      state.pophead = action.payload
    },
    selectPop1: (state, action) => {
      state.pop1 = action.payload
    },
    selectPop2: (state, action) => {
      state.pop2 = action.payload
    },
    selectPop3: (state, action) => {
      state.pop3 = action.payload
    },
    selectMapPop: (state, action) => {
      state.mappop = action.payload
    },
    setImagePop: (state, action) => {
      state.imagePop = action.payload
    },
    selectPopWorkHour: (state, action) => {
      state.workHour = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {selectPopWorkHour,selectPopHead,setImagePop,selectPop1,selectPop2,selectPop3,selectMapPop, updatePage,selectPopularLocation } = pageSlice.actions

export default pageSlice.reducer