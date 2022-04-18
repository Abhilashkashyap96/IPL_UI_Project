import React, { useEffect, useState } from 'react'
import { UserAppSidebar, UserAppHeader } from '../../Components/index'

const TeamLeaderBoard = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('http://localhost:8080/user/view_leader_board_team', {
      method: "GET"
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          console.log(result)
          setData(result)
        })
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
    <UserAppSidebar />
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <UserAppHeader />
      <div className="body px-3">
        <div className='container'>
          <h1>Team Leader Board</h1>
          <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Team name</th>
                      <th scope="col">Matches played</th>
                      <th scope="col">Matches won</th>
                      <th scope="col">Matches lost</th>
                      <th scope="col">Matches drawn</th>
                      <th scope="col">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{data.team_name}</th>
                          <td>{data.matches_played}</td>
                          <td>{data.matches_won}</td>
                          <td>{data.matches_lost}</td>
                          <td>{data.match_drawn}</td>
                          <td>{data.points}</td>
                        </tr>
                      )
                    })
                    }
                  </tbody>
                </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamLeaderBoard