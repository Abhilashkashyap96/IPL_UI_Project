import React, { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


const AdminLogin = () => {
  let navigate = useNavigate();
  const [validation, setValidation] = useState(false)
  const username = useRef();
  const password = useRef();

  useEffect(() => {
    if(localStorage.getItem('adminInfo')){
      navigate('/create-teams', { replace: true })
    }
  },[])

  const handleLogin = () => {
    let data = {
      username: username.current.value,
      password: password.current.value
    }
    
    if(data.username === "" && data.password === ""){
      setValidation(true);
      return
    }else if(data.username === "" || data.password === ""){
      setValidation(true);
      return
    }

    let payload = JSON.stringify({
      username: data.username,
      password: data.password
    })
    fetch("http://localhost:8080/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    }).then((response) => {
      if (response.ok) {
        localStorage.setItem('adminInfo',payload)
        navigate('/create-teams',{replace: true})
      } else if (response.status === 404) {
        setValidation(true)
      }
    });
  }

  const handleRegister = () => {
    navigate('/admin-register',{replace: true})
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
                  <CForm>
                    <h1>Login As Admin</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      name='username'
                      placeholder="Username" 
                      autoComplete="username" 
                      ref={username}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput 
                        name='password'
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        ref={password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={handleLogin} color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                    We’re lighting up the night with IPL fever. Which team are you rooting for?
                    </p>
                    {/* <Link to="/admin-register"> */}
                      <CButton onClick={handleRegister} color="primary" className="mt-3" active tabIndex={-1}>
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

export default AdminLogin