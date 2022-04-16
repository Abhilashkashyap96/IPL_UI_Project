import React from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'
import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell} from '@coreui/react'


const MatchDetails = () => {
  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
        <div className='container'> 
          <h1>Match Details</h1>
          <CTable color="primary" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Team 1</CTableHeaderCell>
                <CTableHeaderCell scope="col">Team 2</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match date</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match time</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match stadium</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match winner</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match status</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match delay</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
          </CTable>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MatchDetails