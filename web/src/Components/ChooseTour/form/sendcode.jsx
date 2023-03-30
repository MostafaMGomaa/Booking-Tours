import React from 'react'
import { NavLink } from 'react-router-dom'

const Sendcode = () => {
  return (
    <div class="form-contanier">
    <div class="form-box">
      <h2>Forget Passwoard</h2>
      <p>please enter a code</p>
      <form>
        <div class="code">
          <input type="text" placeholder='Enter Yor Code' class="rounded" />
        </div>
        
        <NavLink className="btn btn-danger">Continue</NavLink>
      </form>
    </div>
  </div>
  )
}

export default Sendcode
