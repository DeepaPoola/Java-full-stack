import React,{useState} from 'react'
let Factorial=()=>{
    let [count,setCount]=useState(0)
    let [number,setNumber]=useState(5)

    const fact = (num) => {
        //console.log("factorila Function executing!")
        let result = 1;
        for (let i = num; i >= 1; i--) {
            result = result * i;
        }
        console.log("Factorial ", result)
        return result
    
    }
    let resultvalue = React.useMemo(() => { return fact(number) }, [number])
    return <div>
       <h2>Count:{count}</h2>
       <h4>Fact {number} : {resultvalue}</h4>
       <button onClick={()=>{
        setCount(count+1)
       }}>Counter</button>
         <button onClick={() => { setNumber(number + 1) }}> Incr Number </button>
    </div>
}
export default Factorial