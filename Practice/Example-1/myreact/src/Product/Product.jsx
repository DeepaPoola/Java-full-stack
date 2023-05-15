import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incrAction,decrAction} from '../Redux/Product/product.action'
let Product=()=>{
    let dispatch=useDispatch()
    let product=useSelector((state)=>{
        return state.product
    })
    let incrHandler=()=>{
        dispatch(incrAction())
    }
    let decrHandler=()=>{
        dispatch(decrAction())
    }
    return <div className="container mt-5">
       <div className="row">
         <div className="col-md-8">
            <table className="table table-hover">
               <thead className="bg-dark text-white">
                   <tr>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                      <td>{product.name}</td>
                      <td><img src={product.image}/></td>
                      <td>{product.price}</td>
                      <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                      <td>{product.qty*product.price}</td>
                   </tr>
               </tbody>
            </table>
         </div>
       </div>
    </div>
}
export default Product