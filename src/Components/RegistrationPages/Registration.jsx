import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserLogin from "../LoginPages/UserLogin";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");

  const [flag, setFlag] = useState(false);
  // const [login, setLogin] = useState(true);

  let history = useHistory();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !userName) {
      setFlag(true);
    } else {
      setFlag(false);


      // setLogin(!login);
    }
  }

  function handleClick() {
    history.push("/user")
    
  }

  return (
    <>
      <div className="container">
        {" "}
        {/* {login ? ( */}
          <Form  onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="userName"
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>


            <div className="d-flex justify-content-center flex-sm-column">
            <button type="submit" className="btn btn-success btn-md mt-3">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered log in?
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
            </div>
          </Form>
        {/* ) : (
          <UserLogin />
        )} */}
      </div>
    </>
  );
}

export default Registration;
