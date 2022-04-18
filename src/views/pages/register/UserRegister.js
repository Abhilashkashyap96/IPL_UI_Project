import React, { useState } from 'react'
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
import { useForm } from "react-hook-form";

const UserRegister = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [validation, setValidation] = useState(false)

  const manageRegister = (data) => {
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

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            {validation && <div className="alert alert-danger" role="alert">
              User already exist by this email! Try with another email!
            </div>
            }
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <form onSubmit={handleSubmit(manageRegister)}>
                  <h1>User Registration</h1>
                  <p className="text-medium-emphasis">Create your account</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      name="name"
                      placeholder="Name"
                      autoComplete="Name"
                      {...register("name", { required: true })}
                    />
                  </CInputGroup>

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

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      {...register("email", { required: true })}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      {...register("password", { required: true })}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilMobile} />
                    </CInputGroupText>
                    <CFormInput
                      name="mobile_number"
                      type="text"
                      placeholder="Mobile Number"
                      autoComplete="Mobile Number"
                      {...register("mobile_number", { required: true })}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type='submit' color="success">Create Account</CButton>
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
