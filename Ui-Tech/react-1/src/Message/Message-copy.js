import React from 'react'
let intialState = {
    message: "Hello"
}
let reducer = (state = intialState, action) => {
    switch (action) {
        case 'gm':
            return {
                message: "Good Morning"
            }
        case 'ga':
            return { message: "Good After" }
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
                            <button onClick={() => { dispatch('gm') }}>GM</button>
                            <button onClick={() => { dispatch('ga') }}>GA</button>
                            <button onClick={() => { dispatch('gn') }}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message