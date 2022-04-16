import React from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'
import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell} from '@coreui/react'


const CancelBid = () => {
  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
      </div>
      <div className='container'>  
        <h1>Cancel Bid</h1>
        <CTable color="primary" striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Winner opinion</CTableHeaderCell>
              <CTableHeaderCell scope="col">Maximum Score opinion</CTableHeaderCell>
              <CTableHeaderCell scope="col">Match Id</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
        </CTable>
      </div>
    </div>
  </div>
  )
}

export default CancelBid