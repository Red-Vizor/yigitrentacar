import { createSlice } from '@reduxjs/toolkit'

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    value: 0,
    endDate: "",
    startDate: "",
    startTime: "12:00pm",
    endTime: "12:00pm",
    dateDayCount: 0,
    citySelect: "İstanbul, İzmir, Bodrum",
    totalAmount: 0,
    carSelect: [],
    packageOne: [],
    packageTwo: [],
    homePackageOne: [],
    homePackageTwo: [],
  },
  reducers: {
    calculateTotalAmount: (state) => {
      state.totalAmount = 0
      state.totalAmount += state.carSelect.totalAmount
    },

    setHPO: (state, action) => {
      var packAdd = state.homePackageOne.concat(action.payload)
      state.homePackageOne = packAdd
    },
    addPackageOneSelect: (state, action) => {
      var packAdd = state.packageOne.concat(action.payload)
      state.totalAmount += action.payload.price * state.dateDayCount
      state.packageOne = packAdd

      const oldPackage = state.homePackageOne
      state.homePackageOne = []
      oldPackage.map((item) => item.id !== action.payload.id ? state.homePackageOne = [...state.homePackageOne, item] : '')
    },

    removePackageOneSelect: (state, action) => {
      state.totalAmount -= action.payload.price * state.dateDayCount
      const oldPackage = state.packageOne
      state.packageOne = []
      oldPackage.map((item) =>  item.id !== action.payload.id ? state.packageOne = [...state.packageOne, item] : '')

      state.homePackageOne = [...state.homePackageOne, action.payload]
    },





    addPackageTwoSelect: (state, action) => {
      var packAdd = state.packageTwo.concat(action.payload)
      state.totalAmount += action.payload.price * state.dateDayCount
      state.packageTwo = packAdd
    },

    removePackageTwoSelect: (state, action) => {
      state.packageOne = [...state.packageOne, action.payload]
    },

   


    setCarSelect: (state, action) => {
      state.carSelect = action.payload
    },
    setDateDayCount: (state, action) => {
      state.dateDayCount = action.payload
    },
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
export const { addPackageOneSelect, addPackageTwoSelect, removePackageOneSelect, removePackageTwoSelect, setEndDate, setStartDate, setCarSelect, setEndTime, 
  setStartTime, setCitySelect, setDateDayCount, calculateTotalAmount,setHPO } = dateSlice.actions

export default dateSlice.reducer