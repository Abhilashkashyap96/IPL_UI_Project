import React from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'
import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell} from '@coreui/react'


const TeamLeaderBoard = () => {
  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
        <div className='container'>
          <h1>Team Leader Board</h1>
          <CTable color='primary' striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Team name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match played</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match won</CTableHeaderCell>
                <CTableHeaderCell scope="col">Matches lost</CTableHeaderCell>
                <CTableHeaderCell scope="col">Match drawn</CTableHeaderCell>
                <CTableHeaderCell scope="col">points</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
          </CTable>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamLeaderBoard