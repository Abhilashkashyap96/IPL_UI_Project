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
import { cilLockLocked, cilMobile, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const UserRegister = () => {
  let navigate = useNavigate();
  const [validation, setValidation] = useState(false)

  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const mobile_number = useRef();

  const manageRegister = () => {
    let data = {
      name: name.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      mobile_number: mobile_number.current.value,
    }

    if (
      data.name === ""
      || data.username === ""
      || data.email === ""
      || data.password === ""
      || data.mobile_number === ""
    ) {
      setValidation(true);
      return
    } else if (data.name === ""
      && data.username === ""
      && data.email === ""
      && data.password === ""
      && data.mobile_number === ""
    ) {
      setValidation(true);
      return
    }

    fetch("http://localhost:8080/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
        mobile_number: data.mobile_number,
      }),
    }).then((response) => {
      if (response.ok) {
        navigate("/user-login", { replace: true })
      } else if (response.status === 400) {
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
              User already exist by this email! Try with another email!
            </div>
            }
              <CCardBody className="p-4">
                <form>
                  <h1>User Registration</h1>
                  <p className="text-medium-emphasis">Create your account</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      name="name"
                      placeholder="Name"
                      autoComplete="Name"
                      ref={name}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      name="username"
                      placeholder="Username"
                      autoComplete="username"
                      ref={username}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      ref={email}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      ref={password}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilMobile} />
                    </CInputGroupText>
                    <CFormInput
                      onChange={onChange}
                      name="mobile_number"
                      type="text"
                      placeholder="Mobile Number"
                      autoComplete="Mobile Number"
                      ref={mobile_number}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type='button' onClick={manageRegister} color="success">Create Account</CButton>
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

export default UserRegister
