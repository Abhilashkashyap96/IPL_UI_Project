import React from 'react'
import { AdminAppHeader, AdminAppContent, AdminSidebar } from '../../Components/index'

const BiddingList = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="body px-3">
      <h1>Bidding List</h1>
      </div>
      {/* <AppFooter /> */}
    </div>
  </div>
  )
}

export default BiddingList