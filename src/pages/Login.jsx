import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Secure</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />        
          <button>Submit</button>
        </form>
        <p>You don't have an acount? Register</p>
      </div>
    </div>
  );
};

export default Login;
