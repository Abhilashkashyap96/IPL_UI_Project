import React from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'

const MatchSchedule = () => {
  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
      </div>
      <h1>Match Schedule</h1>
    </div>
  </div>
  )
}

export default MatchSchedule