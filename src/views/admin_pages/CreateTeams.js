import React from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'

const CreateTeams = () => {
  return (
    <div>
    <AdminSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <AdminAppHeader />
      <div className="body px-3">
      <h1>Create Teams</h1>
      </div>
      {/* <AppFooter /> */}
    </div>
  </div>

  )
}

export default CreateTeams