import React from 'react'
import Styles from "./payment.module.css"
const Payment = () => {
  return (
    <main className={Styles.mains}>
   <div className={Styles.parent}>
   <p className="h8 fw-bolder py-3">Payment Details</p>
   <div className="row gx-3">
       <div className="col-12">
           <div className="d-flex flex-column">
               <p className="text mb-1 fw-bold">Person Name</p>
               <input className="form-control mb-3" type="text" placeholder="Name" value="Barry Allen"/>
           </div>
       </div>
       <div className="col-12">
           <div className="d-flex flex-column">
               <p className="text mb-1 fw-bold">Card Number</p>
               <input className="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
           </div>
       </div>
       <div className="col-6">
           <div className="d-flex flex-column">
               <p className="text mb-1 fw-bold">Expiry</p>
               <input className="form-control mb-3" type="text" placeholder="MM/YYYY"/>
           </div>
       </div>
       <div className="col-6">
           <div className="d-flex flex-column">
               <p className="text mb-1 fw-bold">CVV/CVC</p>
               <input className="form-control mb-3 pt-2 " type="password" placeholder="***"/>
           </div>
       </div>
       <div className="col-12">
           <div className="btn btn-primary mb-3">
               <span className="ps-3">Pay $243</span>
               <span className="fas fa-arrow-right"></span>
           </div>
       </div>
   </div>
   </div>
</main>

   
  )
}

export default Payment
