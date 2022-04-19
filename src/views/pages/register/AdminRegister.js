import React, { useRef, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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
import { useNavigate } from 'react-router-dom'

const AdminRegister = () => {
  let navigate = useNavigate();
  const [validation, setValidation] = useState(false)
  const username = useRef();
  const password = useRef();

  const registerAdmin = () => {
    let data = {
      username: username.current.value,
      password: password.current.value
    }

    if (data.username === ""
      || data.password === ""
    ) {
      setValidation(true);
      return
    } else if (data.username === ""
      && data.password === ""
    ) {
      setValidation(true);
      return
    }

    fetch("http://localhost:8080/admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    }).then((response) => {
      if (response.ok) {
        navigate("/admin-login", { replace: true })
      } else {
        setValidation(true)
      }
    });
  }

  const onChange = () => {
    setValidation(false)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              {validation && <div className="alert alert-danger" role="alert">
                User already exist by this User Name! Try with another email!
              </div>
              }
              <CCardBody className="p-4">
                <form>
                  <h1>Admin Registration</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      name='username'
                      placeholder="Username"
                      autoComplete="username"
                      ref={username}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      type='password'
                      name='password'
                      placeholder="Password"
                      autoComplete="username"
                      ref={password}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton onClick={registerAdmin} color="success">Create Account</CButton>
                  </div>
                </form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default AdminRegister
