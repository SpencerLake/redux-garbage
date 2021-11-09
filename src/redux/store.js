import {createStore, combineReducers, applyMiddleware} from 'redux'
import { reducer } from './budgetReducer.js'

const budgetReducer = reducer
const promiseMiddleware = import('redux-promise-middleware')

const rootReducer = combineReducers({
    budget: budgetReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))