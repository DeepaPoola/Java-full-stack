import React,{Component}  from 'react'
class Login extends Component{
    render(){
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Registration</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                     <input  className="form-control" type="text" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                     <input  className="form-control" type="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                     <input  className="form-control" type="number" placeholder="Mobile"/>
                                </div>
                                <div>
                                    <input className="btn btn-success" type="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login