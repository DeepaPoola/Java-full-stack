import React, { useState ,useRef} from 'react'

const Registration = () => {
    //let [terms, setTerms] = useState(false);
    let buttonRef =useRef(null)
    let passwordE1=useRef(null)
    let acceptTermsHandler = (event) => {
        //writing us logic
        console.log(event.target.checked)
        /*if (event.target.checked == true) {
            buttonRef.current.disabled = false
        }
        else {
            buttonRef.current.disabled = true
        }*/
       // setTerms(event.target.checked)
        buttonRef.current.disabled=!event.target.checked
    }
    let passwordHandler=()=>{
        passwordE1.current.type="text"
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h5>Registartion Page</h5>
                        </div>
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <input placeholder="User Name" type="text" className="form-control" place="User Name" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Email Id" type="text" className="form-control" place="Email" />
                                </div>
                                <div className="form-group">
                                    <input placeholder="Mobile" type="text" className="form-control" place="Mobile" />
                                </div>
                                <div className="form-group">
                                    <input ref={passwordE1} placeholder="Password" type="password" className="form-control" place="Password" />
                                    <i className="fa fa-eye" onClick={passwordHandler}></i>
                                    
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" onChange={acceptTermsHandler} className="form-check-input" />
                                    <label className="form-check-label">Accept Terms & Conditions</label>
                                </div>
                                <input type="submit" value="Registration" className="btn btn-success" disabled ref={buttonRef} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration