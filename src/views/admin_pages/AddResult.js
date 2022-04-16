import React from 'react'
import { AdminAppHeader, AdminAppContent, AdminSidebar } from '../../Components/index'
import { CCard,CCardBody} from '@coreui/react'
import {CButton, CFormLabel,CInputGroup,CFormInput,CFormCheck } from '@coreui/react'

const AddResult = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="d-flex justify-content-center container">
        <CCard style={{ width:'40rem' }}>
        <CCardBody>
        <h3>Add Result</h3>
        <CFormLabel >Team Name</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CFormLabel >Matches Played</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CFormLabel >Matches Won</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CFormLabel >TMatches Lost</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CFormLabel >Matches Draw</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CFormLabel >Points</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
        </CInputGroup>
        <CFormCheck id="flexCheckChecked" label="Agree to add results?"  />
        <CButton color="primary" variant="outline" style={{width:'100%'}}>Add Results</CButton>
        </CCardBody>
        </CCard>
      </div>
    </div>
  </div>
  )
}

export default AddResult