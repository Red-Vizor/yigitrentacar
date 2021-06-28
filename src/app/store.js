import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counter/counterSlice'
import pageReducer from '../store/general/pageSlice'
import menuesReducer from '../store/menues/menuesSlice'
import menuesMobileReducer from '../store/menues/mobileMenuesSlice'
import reservationPageChangeSlice from '../store/reservation/reservationPageChangeSlice'
import dateSlice from '../store/reservation/dateSlice'
import userSlice from '../store/user/userSlice'
export default configureStore({
  reducer: {
      counter: counterReducer,
      page: pageReducer,
      menues: menuesReducer,
      mobilemenues: menuesMobileReducer,
      dateslice: dateSlice,
      reservationChange: reservationPageChangeSlice,
      user: userSlice
  },
})