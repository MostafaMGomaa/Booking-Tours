import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div className="form-contanier">
      <div className="form-box">
        <h2>sign in</h2>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <div className="forget">
            <NavLink to="/forgotpass" className="btn text-light">
              Forget Password ?
            </NavLink>
            <div className="remeber-me">
              Remeber Me
              <input type="checkbox" />
            </div>
          </div>
          <button>Submit</button>
          <div className="line">
            <hr />
            OR
            <hr />
          </div>
          <div className="icon">
            <font-awesome-icon
              icon="fa-brands fa-square-facebook"
              className="btn-primary btn face"
            />
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              className="btn btn-danger"
            />
            <font-awesome-icon icon="fa-brands fa-apple" className="btn btn-dark" />
          </div>
          <div className="login">
            Don't Have an account ?
            <NavLink to="/signup">SignUp</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
