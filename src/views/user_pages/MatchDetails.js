import React, { useEffect, useState } from 'react'
import { UserAppContent, UserAppSidebar, AppFooter, UserAppHeader } from '../../Components/index'
import {CTable,CTableHead,CTableRow,CTableHeaderCell,CTableBody,CTableDataCell} from '@coreui/react'


const MatchDetails = () => {
  const [data, setData] = useState([]);


  const getData = () => {
    fetch('http://localhost:8080/user/match_details', {
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
          <h1>Match Details</h1>
          <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Match Id</th>
                      <th scope="col">Team 1-Id</th>
                      <th scope="col">Team 2-Id</th>
                      <th scope="col">Date</th>
                      <th scope="col">Match Time</th>
                      <th scope="col">Match Stadium</th>
                      <th scope="col">Match Delay</th>
                      <th scope="col">Status</th>
                      <th scope="col">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{data.match_id}</th>
                          <td>{data.teamdetails}</td>
                          <td>{data.teamdetails2}</td>
                          <td>{data.match_date}</td>
                          <td>{data.match_time}</td>
                          <td>{data.match_stadium}</td>
                          <td>{data.delay}</td>
                          <td>{data.status}</td>
                          <td>{data.winner}</td>
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

export default MatchDetails