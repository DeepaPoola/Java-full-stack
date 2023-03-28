//action types 

const GM="GM"
const GN="GN"
let gmAction=()=>{
    //invoking the api - data
    console.log("Gm action")
    return {type:GM,payload:"Hello"}
}
let gnAction=()=>{
    console.log("Gn action")
    return {type:GN}
}
export {gmAction,gnAction,GM,GN}
//What is action?
//action is function, it return actionable objects