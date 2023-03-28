import React from 'react'
let intialState = {
    message: "Hello"
}
let reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GM':
            return {
                message: "Good Morning"
            }
        case 'GA':
            return { message: "Good After" }
        case 'GN':
                return { message: "Good Night" }
        default:
            return state
    }
}

const Message = () => {
    let [state, dispatch] = React.useReducer(reducer, intialState);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <p className="h3">UseReducer Hook Example</p>
                        </div>
                        <div className="card-body">
                            <p className='h4'>{state.message}</p>
                            <button onClick={() => { dispatch({ type: "GM" }) }}>GM</button>
                            <button onClick={() => { dispatch({ type: "GA" }) }}>GA</button>
                            <button onClick={() => { dispatch({ type: "GN" }) }}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message