const INCR="INCR"
const DECR="DECR"
let incrAction=()=>{
    console.log("incr Action")
    return {type:INCR}
}
let decrAction=()=>{
    console.log("decr action")
    return {type:DECR}
}
export {INCR,DECR,incrAction,decrAction}