import React, { Component, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MatchDetailsContext } from './utilitis/Context'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const UserHomePage = React.lazy(() => import('./layout/UserHomePage'))
const AdminHomePage = React.lazy(() => import('./layout/AdminHomePage'))

// Pages
const UserLogin = React.lazy(() => import('./views/pages/login/UserLogin'))
const AdminLogin = React.lazy(() => import('./views/pages/login/AdminLogin'))
const UserRegister = React.lazy(() => import('./views/pages/register/UserRegister'))
const AdminRegister = React.lazy(() => import('./views/pages/register/AdminRegister'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// User Pages
const CreateBid = React.lazy(() => import('./views/user_pages/CreateBid'))
const MatchDetails = React.lazy(() => import('./views/user_pages/MatchDetails'))
const MatchSchedule = React.lazy(() => import('./views/user_pages/MatchSchedule'))
const TeamLeaderBoard = React.lazy(() => import('./views/user_pages/TeamLeaderBoard'))

// Admin Pages
const CreateTournament = React.lazy(() => import('./views/admin_pages/CreateTournament'))
const CreateTeams = React.lazy(() => import('./views/admin_pages/CreateTeams'))
const ScheduleMatch = React.lazy(() => import('./views/admin_pages/ScheduleMatch'))
const AddResult = React.lazy(() => import('./views/admin_pages/AddResult'))
const BiddingList = React.lazy(() => import('./views/admin_pages/BiddingList'))

const App = () => {

  const [update, setUpdate] = useState({
    team_1_id: "",
    team_2_id: "",
    match_date: "",
    match_time: ""
  })

    return (
      <MatchDetailsContext.Provider 
      value={{
        update,
        setUpdate
        }}>
      <Router>
        <Suspense fallback={loading}>
          <Routes>

            <Route path="*" name="Home" element={<DefaultLayout />} />

            <Route exact path="/user-login" name="User Login Page" element={<UserLogin />} />
            <Route exact path="/admin-login" name="Admin Login Page" element={<AdminLogin />} />
            <Route exact path="/user-register" name="Register Page" element={<UserRegister />} />
            <Route exact path="/admin-register" name="Register Page" element={<AdminRegister />} />
            <Route exact path="/user-home-page" name="Home Page" element={<UserHomePage />} />
            <Route exact path="/admin-home-page" name="Home Page" element={<AdminHomePage />} />
            <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} />

            {/* User Pages */}
            <Route exact path="/create-bid" name="Create Bid" element={<CreateBid />} />
            <Route exact path="/match-details" name="Match Details" element={<MatchDetails />} />
            <Route exact path="/match-schedule" name="Match Schedule" element={<MatchSchedule />} />
            <Route exact path="/team-leader-board" name="Team Leader Board" element={<TeamLeaderBoard />} />

            {/* Admin Pages */}
            <Route exact path="/create-tournament" name="Create Tournament" element={<CreateTournament />} />
            <Route exact path="/create-teams" name="Create Teams" element={<CreateTeams />} />
            <Route exact path="/schedule-match" name="ScheduleMatch" element={<ScheduleMatch />} />
            <Route exact path="/add-result" name="Add Result" element={<AddResult />} />
            <Route exact path="/bidding-list" name="Bidding List" element={<BiddingList />} />
          </Routes>
        </Suspense>
      </Router>
      </MatchDetailsContext.Provider>
    )
  }


export default App