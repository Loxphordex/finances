import { combineReducers } from 'redux'
import { incomeFormReducer } from './incomeFormReducer'

export const rootReducer = combineReducers({ income: incomeFormReducer })