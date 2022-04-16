import React from 'react'
import { AdminAppHeader, AdminAppContent, AdminSidebar } from '../../Components/index'
import { CTableBody,CTable,CTableHead,CTableRow,CTableHeaderCell} from '@coreui/react'
const BiddingList = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="body px-3">
          <h1>Bidding List</h1>
          <CTable color= "primary" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bidder Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Bidder Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Team Chosen</CTableHeaderCell>
                <CTableHeaderCell scope="col">Player Chosen</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            {/* <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Mark</CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Jacob</CTableDataCell>
                <CTableDataCell>Thornton</CTableDataCell>
                <CTableDataCell>@fat</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                <CTableDataCell>@twitter</CTableDataCell>
              </CTableRow>
            </CTableBody> */}
          </CTable>
      </div>
    </div>
  </div>
  )
}

export default BiddingList