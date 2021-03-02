import { combineReducers } from 'redux'
import { musicReducer } from './musicReducer'

export const rootReducer = combineReducers({
  music: musicReducer
})
