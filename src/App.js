import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Dashboard = React.lazy(() =>import ('./views/dashboard/Dashboard'))
const CancelBid = React.lazy(() =>import ('./views/user_pages/CancelBid'))
const CreateBid = React.lazy(() =>import ('./views/user_pages/CreateBid'))
const MatchDetails = React.lazy(() =>import ('./views/user_pages/MatchDetails'))
const MatchSchedule = React.lazy(() =>import ('./views/user_pages/MatchSchedule'))
const TeamLeaderBoard = React.lazy(() =>import ('./views/user_pages/TeamLeaderBoard'))

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/user-login" name="User Login Page" element={<UserLogin />} />
            <Route exact path="/admin-login" name="Admin Login Page" element={<AdminLogin />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/user-home-page" name="Home Page" element={<UserHomePage />} />
            <Route exact path="/admin-home-page" name="Home Page" element={<AdminHomePage />} />
            <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} />
            <Route exact path="/cancel-bid" name="Cancel Bid" element={<CancelBid />} />
            <Route exact path="/create-bid" name="Create Bid" element={<CreateBid />} />
            <Route exact path="/match-details" name="Match Details" element={<MatchDetails />} />
            <Route exact path="/match-schedule" name="Match Schedule" element={<MatchSchedule />} />
            <Route exact path="/team-leader-board" name="Team Leader Board" element={<TeamLeaderBoard />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </Router>
    )
  }
}

export default App