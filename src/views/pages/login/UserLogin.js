import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, CAlert } from '@coreui/icons'
import { useForm } from "react-hook-form";

const UserLogin = () => {
  let navigate = useNavigate();
  const [validation, setValidation] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if(localStorage.getItem('userInfo')){
      navigate('/create-bid', { replace: true })
    }
  },[])

  const manageLogin = (data) => {
    let payload = JSON.stringify({
      username: data.username,
      password: data.password
    })
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).then((response) => {
      if (response.ok) {
        localStorage.setItem('userInfo',payload)
        navigate('/create-bid', { replace: true })
      } else if (response.status === 404) {
        setValidation(true)
      }
    });
  }


  const manageRegister = () => {
    navigate('/user-register', { replace: true })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            {validation && <div className="alert alert-danger" role="alert">
              Invalid Login credentials!! Please Try Again.
            </div>
            }
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <form onSubmit={handleSubmit(manageLogin)}>
                    <h1>Login As User</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        {...register("username", { required: true })}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        {...register("password", { required: true })}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs={6}>
                        <CButton type='submit' onClick={manageLogin} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </form>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      We’re lighting up the night with IPL fever. Which team are you rooting for?
                    </p>
                    {/* <Link to="/user-register"> */}
                    <CButton onClick={manageRegister} color="primary" className="mt-3" active tabIndex={-1}>
                      Register Now!
                    </CButton>
                    {/* </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UserLogin