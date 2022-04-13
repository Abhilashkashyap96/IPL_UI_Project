import React from 'react'
import { Link } from 'react-router-dom'
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
import { Icon } from '@iconify/react'

const DefaultLayout = () => {
  return (
<div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div className='d-flex flex-lg-column'>
                <Link to={"/user-login"}>
                <button type="button" className="btn btn-primary mb-4" style={{width:"100%"}}>Login as user</button>
                  </Link>
                <Link to={"/admin-login"}>
                <button type="button" className="btn btn-primary mt-4" style={{width:"100%"}}>Login as Admin</button>
                  </Link>
                    
                  </div>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                   <h1> IPL <Icon icon="bxs:cricket-ball" /> Fantacy</h1>
                  </div>
                  <div>
                  <p>
                    We’re lighting up the night with IPL fever. Which team are you rooting for?
                    </p>
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

export default DefaultLayout