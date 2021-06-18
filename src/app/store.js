import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counter/counterSlice'
import pageReducer from '../store/general/pageSlice'
import menuesReducer from '../store/menues/menuesSlice'
export default configureStore({
  reducer: {
      counter: counterReducer,
      page: pageReducer,
      menues: menuesReducer
  },
})