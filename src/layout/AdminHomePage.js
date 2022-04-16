import React from 'react'
import { AdminAppHeader, AdminAppContent, AdminSidebar } from '../Components/index'

function AdminHomePage() {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="body flex-grow-1 px-3">
        {/* <AdminAppContent /> */}
      </div>
      {/* <AppFooter /> */}
    </div>
  </div>
  )
}

export default AdminHomePage