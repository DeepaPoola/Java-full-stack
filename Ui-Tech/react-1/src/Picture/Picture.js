import React, { useRef } from 'react'
import Images from '../Images/tcs.png' 
const Picture = () => {
    let imageEl = useRef(null);
    let clickHandler = () => {
        console.log(imageEl.current);
    }
    return (
        <React.Fragment>
            <img src={Images} alt="" ref={imageEl} />
            <button onClick={clickHandler}>click</button>
        </React.Fragment>
    )
}

export default Picture