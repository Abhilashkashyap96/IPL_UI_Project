import React from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import {CButton, CFormLabel,CInputGroup,CFormInput,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CFormCheck } from '@coreui/react'
import { CCard,CCardImage,CCardBody } from '@coreui/react'

const CreateTournament = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="d-flex justify-content-center container">
        <CCard style={{ width: '30rem' }}>
          <CCardBody>
              <h1>Create Tournament</h1>
              <CFormLabel >Select Match</CFormLabel>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              {/* <CDropdown style={{width:'100%'}}>
                <CDropdownToggle color="secondary">Nothing Selected</CDropdownToggle>
                <CDropdownMenu style={{width:'100%'}}>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown> */}

              <CFormLabel >Number of Teams</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
              </CInputGroup>

              <CFormLabel >Number of Qualifiers</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Username"  aria-describedby="basic-addon1"/>
              </CInputGroup>
              <CFormCheck id="flexCheckChecked" label="Agree to new tornament creation"  />
              <CButton color="primary" variant="outline" style={{width:'100%'}}>Create New Tournament</CButton>
          </CCardBody>
        </CCard>
      </div>
    </div>
  </div>
  )
}

export default CreateTournament