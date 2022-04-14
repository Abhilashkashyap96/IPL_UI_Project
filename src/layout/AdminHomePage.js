import React from 'react'
import { AppContent, AdminAppSidebar, AppFooter, AdminAppHeader } from '../Components/index'

function AdminHomePage() {
  return (
    <div>
    <AdminAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="body flex-grow-1 px-3">
        {/* <AppContent /> */}
      </div>
      {/* <AppFooter /> */}
    </div>
  </div>
  )
}

export default AdminHomePage