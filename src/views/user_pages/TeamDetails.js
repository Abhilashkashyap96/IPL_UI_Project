import React, { useEffect, useState } from 'react'
import { UserAppSidebar, UserAppHeader } from '../../Components/index'

const TeamDetails = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('http://localhost:8080/user/show-team', {
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
          <h1>Team Details</h1>
          <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Match Id</th>
                      <th scope="col">Team Name</th>
                      <th scope="col">Home Ground</th>
                      <th scope="col">Team Players</th>
                      <th scope="col">Captain</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{data.match_id}</th>
                          <td>{data.team_name}</td>
                          <td>{data.home_ground}</td>
                          <td>{data.team_players}</td>
                          <td>{data.captain}</td>
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

export default TeamDetails