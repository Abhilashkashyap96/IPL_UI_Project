import React, { useEffect, useState } from 'react'
import { UserAppSidebar, UserAppHeader } from '../../Components/index'
import { CCard, CCardBody } from '@coreui/react'
import SimpleDateTime from 'react-simple-timestamp-to-date';


const MatchSchedule = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('http://localhost:8080/user/matches-schedule', {
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
          <div className=' d-flex justify-content-center mt-6 container'>
            <CCard style={{ width: '80rem ' }}>
              <CCardBody>
                <h1>Match Schedule</h1>

                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Match Id</th>
                      <th scope="col">Team 1-Id</th>
                      <th scope="col">Team 2-Id</th>
                      <th scope="col">Date</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">End Time</th>
                      <th scope="col">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{data.match_id}</th>
                          <td>{data.teamdetails}</td>
                          <td>{data.teamdetails2}</td>
                          <td><SimpleDateTime dateFormat="DMY" dateSeparator="-" showTime="0">{data.match_date}</SimpleDateTime></td>
                          <td>{data.start_time}</td>
                          <td>{data.end_time}</td>
                          <td>{data.result}</td>
                        </tr>
                      )
                    })
                    }
                  </tbody>
                </table>

              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchSchedule