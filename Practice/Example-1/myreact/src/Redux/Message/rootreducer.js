import {messageReducer} from './message.reducer'
import {productReducer} from '../Product/product.reducer'
import { combineReducers } from 'redux'
let rootreducer=combineReducers({message:messageReducer,product:productReducer})
export {rootreducer}