import React from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'
import { CInputGroup,CInputGroupText,CFormInput ,CFormLabel,CFormTextarea,CButton,CCard,CCardBody, CForm} from '@coreui/react'

const CreateBid = () => {
  return (
  <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
        <div className= ' d-flex justify-content-center mt-6 container'>
            <CCard style={{ width: '30rem ' }}>  
                <CCardBody>
                    <h1>Create Bid</h1>

                    <CFormLabel> User id</CFormLabel>
                    <CInputGroup className="mb-3">
                        <CFormInput placeholder="User id" aria-label="User id" aria-describedby="basic-addon1"/>
                    </CInputGroup>

                    <CFormLabel> Who will win</CFormLabel>
                    <CInputGroup className="mb-3">
                        <CFormInput placeholder="who will win" aria-label="who will win" aria-describedby="basic-addon1"/>
                    </CInputGroup>

                    <CFormLabel> Who will score maximum</CFormLabel>
                    <CInputGroup className="mb-3"> 
                        <CFormInput placeholder="Which player will score maximun?" aria-label="Which player will score maximun?" aria-describedby="basic-addon1"/>
                    </CInputGroup>

                    <CFormLabel> Enter Match Id</CFormLabel>
                    <CInputGroup className="mb-3">  
                        <CFormInput placeholder="Match Id:"  aria-describedby="basic-addon1"/>
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

export default CreateBid