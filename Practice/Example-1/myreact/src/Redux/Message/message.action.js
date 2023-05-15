//action types
const GM="GM"
const GN="GN"
let gmAction=()=>{
    console.log("GM Action")
    return {type:GM}
}
let gnAction=()=>{
    console.log("GN Action")
    return {type:GN}
}
export {gmAction,gnAction,GM,GN}