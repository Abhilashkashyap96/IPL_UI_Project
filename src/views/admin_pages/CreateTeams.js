import React from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import { CCard,CCardBody} from '@coreui/react'
import {CButton, CFormLabel,CInputGroup,CFormInput,CFormCheck } from '@coreui/react'

const CreateTeams = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="d-flex justify-content-center container"> 
        <CCard style={{ width:'40rem' }}>
          <CCardBody>
            <h3>Create Teams</h3>
            <CFormLabel >Team Name</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel >Home Ground</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel >Team Players</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel >Captain</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>
            <CFormCheck id="flexCheckChecked" label="Validate"  />
            <CButton color="primary" variant="outline" style={{width:'100%'}}>Create New Team</CButton>
          </CCardBody>
        </CCard>
      </div>
    </div>
  </div>

  )
}

export default CreateTeams