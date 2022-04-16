import React from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'
import { CInputGroup,CInputGroupText,CFormInput ,CFormLabel,CFormTextarea, CForm,CButton,CCard, CCardBody} from '@coreui/react'


const MatchSchedule = () => {
  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
        <div className=' d-flex justify-content-center mt-6 container'>
          <CCard style={{ width: '30rem ' }}>
            <CCardBody>
            <h1>Match Schedule</h1>

            <CFormLabel>Match id</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Match id:" />
            </CInputGroup>

            <CFormLabel> Team 1</CFormLabel>    
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Team 1:" aria-label="Team 1:" aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel> Team 2</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Team 2:" aria-label="Team 2:" aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel> Start time</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Start time:" aria-label="Start time:" aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel> End time</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="End time:" aria-label="End time:" aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CFormLabel> Result</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput placeholder="Result:" label="Result:" aria-describedby="basic-addon1"/>
            </CInputGroup>

            <CButton color="primary"  style={{width:'100%'}}>Bid now</CButton>
            
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MatchSchedule