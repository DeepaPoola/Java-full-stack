import {INCR,DECR} from '../Count/count.action'
let initialState={
    count:"me"
}
let countReducer=(state=initialState,action)=>{
  console.log(action)
  console.log(action.type)
  switch(action.type)
  {
    case INCR:
        return {count:"Hello"}
    case DECR:
        return {count:"GM"}

    default:
        return state
  }
}
export {countReducer}