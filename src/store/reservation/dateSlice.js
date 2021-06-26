import { createSlice } from '@reduxjs/toolkit'

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    value: 0,
    endDate: "",
    startDate:"",
    startTime:"12:00pm",
    endTime:"12:00pm",
    citySelect: "İstanbul, İzmir, Bodrum",
  },
  reducers: {
    setEndDate: (state, action) => {
      state.endDate = action.payload
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload
    },
    setCitySelect: (state, action) => {
      state.citySelect = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEndDate, setStartDate, setEndTime, setStartTime,setCitySelect} = dateSlice.actions

export default dateSlice.reducer