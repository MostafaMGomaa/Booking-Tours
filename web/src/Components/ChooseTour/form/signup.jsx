import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div class="form-contanier">
    <div class="form-box">
      <h2>Sing UP</h2>
      <form>
        <input type="text" placeholder="User Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="Location" />
        <div class="chack-box justify-content-center align-items-center d-flex">
          <input type="checkbox" className='w-auto'/>
          <b>I agree with <a href="">Terms</a> and <a href="">Privacy</a></b>
        </div>
        <button>next</button>
        <div class="login">
          Already have an account ?
          <NavLink to="/signin">SignIn</NavLink>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
