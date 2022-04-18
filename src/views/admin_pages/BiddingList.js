import React, { useEffect, useState } from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import { CCard, CCardBody } from '@coreui/react'

const BiddingList = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch('http://localhost:8080/admin/biddings', {
      method: "GET"
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          setData(result)
        })
      }
    })
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <AdminSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AdminAppHeader />
        <div className="d-flex justify-content-center mt-6 container">
        <CCard style={{ width:'80rem' }}>
          <CCardBody>
          <h1>Bidding List</h1>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Bidder Id</th>
                <th scope="col">Predicted winner</th>
                <th scope="col">Predicted maximum score</th>
                <th scope="col">Match Id</th>
              </tr>
            </thead>
            <tbody>

             { data.map((data, i)=>{
               return(
                <tr key={i}>
                   <th scope="row">{data.user_id}</th>
                   <td>{data.user_opinion1}</td>
                   <td>{data.user_opinion2}</td>
                   <td>{data.match_id}</td>
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
  )
}

export default BiddingList