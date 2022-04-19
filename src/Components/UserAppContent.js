import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
// import routes from '../routes'
import CreateBid from 'src/views/user_pages/CreateBid'
import MatchDetails from 'src/views/user_pages/MatchDetails'
import MatchSchedule from 'src/views/user_pages/MatchSchedule'
import TeamLeaderBoard from 'src/views/user_pages/TeamLeaderBoard'

const UserAppContent = () => {

    const showContent = () => {
        if(window.location.href === "http://localhost:3000/user-home-page"){
          return <CreateBid />
        }else if(window.location.href === "http://localhost:3000/user-home-page/match-details"){
          return <MatchDetails />
        }else if(window.location.href === "http://localhost:3000/user-home-page/match-schedule"){
          return <MatchSchedule />
        }else if(window.location.href === "http://localhost:3000/user-home-page/team-leader-board"){
          return <TeamLeaderBoard />
        }
      }
    return (
        <CContainer lg>
            {showContent()}
        </CContainer>
    )
}

export default UserAppContent