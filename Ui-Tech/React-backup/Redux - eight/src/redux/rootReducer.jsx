import { messageReducer } from './message/message.reducer';
import {productReducer} from './product/product.reducer'
import {combineReducers} from 'redux'
let rootReducer=combineReducers({message:messageReducer,product:productReducer})
export {rootReducer}