import React from 'react'
import { AdminAppHeader, AdminAppContent, AdminSidebar } from '../../Components/index'

const AddResult = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="body px-3">
      <h1>Add Result</h1>
      </div>
      {/* <AppFooter /> */}
    </div>
  </div>
  )
}

export default AddResult