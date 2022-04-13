import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function AdminLogin() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

//   const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();

    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog  || emaillog ) {
      setFlag(true);
    } else {
    //   setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {/* {home ? ( */}
        <form onSubmit={handleLogin}>
          <h3>Login as user</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center flex-sm-column">
          <button type="submit" className="btn btn-success btn-md mt-3">
            Login
          </button>
          </div>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      {/* ) : (
        <>
          <h1>Login Successfully</h1>
        </>
      )} */}
    </div>
  );
}

export default AdminLogin;