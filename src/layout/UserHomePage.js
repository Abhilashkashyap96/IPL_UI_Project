import React from 'react'
import CancelBid from 'src/views/user_pages/CancelBid'
import CreateBid from 'src/views/user_pages/CreateBid'
import MatchDetails from 'src/views/user_pages/MatchDetails'
import MatchSchedule from 'src/views/user_pages/MatchSchedule'
import TeamLeaderBoard from 'src/views/user_pages/TeamLeaderBoard'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../Components/index'


function UserHomePage() {
  
  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body flex-grow-1 px-3">
        {/* <UserAppContent /> */}
      </div>
      {/* <AppFooter /> */}
    </div>
  </div>
  )
}

export default UserHomePage