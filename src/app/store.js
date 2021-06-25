import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counter/counterSlice'
import pageReducer from '../store/general/pageSlice'
import menuesReducer from '../store/menues/menuesSlice'
import reservationPageChangeSlice from '../store/reservation/reservationPageChangeSlice'
export default configureStore({
  reducer: {
      counter: counterReducer,
      page: pageReducer,
      menues: menuesReducer,
      reservationChange: reservationPageChangeSlice
  },
})