import {createStore} from 'redux'
import {rootreducer} from './Redux/Message/rootreducer'
import {composeWithDevTools} from 'redux-devtools-extension'
let store=createStore(rootreducer,composeWithDevTools())
export {store}