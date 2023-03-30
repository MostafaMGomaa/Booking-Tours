import React from "react";
import { NavLink } from "react-router-dom";

const Forgotpass = () => {
  return (
    <div class="form-contanier">
      <div class="form-box pt-3">
        <h2>Forget Passwoard</h2>
        <p>
          Please enter your email and we'll send you a code to get back into
          your account
        </p>
        <form>
          <label for="new">Email Address</label>
          <input type="email" placeholder="User Name" id="new" />

          <NavLink className="btn btn-danger">Continue</NavLink>
        </form>
      </div>
    </div>
  );
};

export default Forgotpass;
