import React from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import { CCard,CCardBody} from '@coreui/react'
import {CButton, CFormLabel,CInputGroup,CFormInput,CFormCheck } from '@coreui/react'

const ScheduleMatch = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="d-flex justify-content-center container">
        <CCard style={{ width:'30rem' }}>
          <CCardBody>
          <h1>Schedule Match</h1>

            <CFormLabel >Team 1</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel >Team 2</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>
            <div>
              <div className='d-flex flex-lg-column'>
                <CFormLabel >Date</CFormLabel>
                <input type="date" id="start" name="date" value="2022-04-18" min="2022-01-01" max="2022-12-31"/>
              </div>
              <div className='d-flex flex-lg-column'>
                <CFormLabel >Time</CFormLabel>
                <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
              </div>
            </div>

            <CFormLabel >Result</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
            </CInputGroup>
            <CFormCheck id="flexCheckChecked" label="Validate"  />
            <CButton color="primary" variant="outline" style={{width:'100%'}}>Schedule Match</CButton>
          </CCardBody>
        </CCard>
      </div>
    </div>
  </div>
  )
}

export default ScheduleMatch