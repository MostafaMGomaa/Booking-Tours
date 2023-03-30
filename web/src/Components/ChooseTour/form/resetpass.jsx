import React from 'react'
import { NavLink } from 'react-router-dom'

const Resetpass = () => {
  return (
    <div class="form-contanier">
    <div class="form-box">
      <h2>Rest Passwoard</h2>
      <form>
        <label for="new">Enter new Passwoard</label>
        <input type="password" placeholder="User Name" id="new" />
        <label for="confirm">confirm new Passwoard</label>
        <input type="password" placeholder="Email" id="confirm" />
        <NavLink className="btn btn-danger">Continue</NavLink>
       
      </form>
    </div>
  </div>
  )
}

export default Resetpass
