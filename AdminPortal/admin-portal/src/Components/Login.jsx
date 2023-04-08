import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {/* left div htmlFor text */}
      <div className="heading">Healthcare Freelance Service Platform</div>
      {/* right div */}
      <div className="login">
        <h3 className="text-center">Welcome!</h3>

        <form /*className="needs-validation"*/>
          <div className="form-group" /*className="form-group was-validated"*/>
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="form-group" /*className="form-group was-validated"*/>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              required
            />
          </div>
          {/* <input
            className="btn btn-success w-100"
            type="submit"
            value="SIGN IN"
            onSubmit={()=>{
              navigate('/dashboard')
            }}
          /> */}
          <button
            className="btn btn-success w-100"
            onClick={() => {
              navigate('/dashboard')
            }}
          >
            Log In
          </button>
          <br />
          <br />
          Already have an account?
          <Link to={"/register"}>Signup</Link>
        </form>
      </div>
    </div>
  );
}
