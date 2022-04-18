import React, { useRef, useState, useContext } from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import { CCard, CCardBody } from '@coreui/react'
import { CButton, CFormLabel, CInputGroup, CFormInput, CFormCheck } from '@coreui/react'
import { MatchDetailsContext } from 'src/utilitis/Context'

const ScheduleMatch = () => {
  const context = useContext(MatchDetailsContext)
  const [validation, setValidation] = useState(false)
  const team_1_id = useRef()
  const team_2_id = useRef()
  const start_time = useRef()
  const end_time = useRef()
  const match_date = useRef()
  const result = useRef()

  console.log(context)

  const getData = () => {
    let data = {
      team_1_id: team_1_id.current.value,
      team_2_id: team_2_id.current.value,
      start_time: start_time.current.value,
      end_time: end_time.current.value,
      result: result.current.value,
      match_date: new Date(match_date.current.value)
    }

    let payLoad = JSON.stringify({
      team_1_id: data.team_1_id,
      team_2_id: data.team_2_id,
      start_time: data.start_time,
      end_time: data.end_time,
      match_date: data.match_date,
      result: data.result
    })

    fetch('http://localhost:8080/admin/match-schedule', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payLoad,
    }).then((response) => {
      if (response.ok) {
        context.setUpdate(payLoad)
        location.reload();
      } else if (response.status === 404) {
        setValidation(true)
      }
    });
    // console.log(data)
  }




  return (
    <div>
      <AdminSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AdminAppHeader />
        <div className="d-flex justify-content-center container">
          {validation && <div className="alert alert-danger" role="alert">
            Invalid Login credentials!! Please Try Again.
          </div>
          }
          <form>
            <CCard style={{ width: '30rem' }}>
              <CCardBody>
                <h1>Schedule Match</h1>

                <CFormLabel> Team 1 ID</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name='team_1_id'
                    placeholder="Enter Team 1 ID"
                    aria-label="Team 1"
                    aria-describedby="basic-addon1"
                    ref={team_1_id}
                  />
                </CInputGroup>

                <CFormLabel> Team 2 ID</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name='team_2_id'
                    placeholder="Enter Team 2 ID"
                    aria-label="Team 2"
                    aria-describedby="basic-addon1"
                    ref={team_2_id}
                  />
                </CInputGroup>

                <CFormLabel> Start time</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name='start_time'
                    placeholder="Start time"
                    aria-label="Start time"
                    aria-describedby="basic-addon1"
                    ref={start_time}
                  />
                </CInputGroup>

                <CFormLabel> End time</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    name='end_time'
                    placeholder="End time"
                    aria-label="End time"
                    aria-describedby="basic-addon1"
                    ref={end_time}
                  />
                </CInputGroup>

                <CFormLabel>Match Date</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    type='date'
                    name='match_date'
                    placeholder="Match Date"
                    aria-label="Match Date"
                    aria-describedby="basic-addon1"
                    ref={match_date}
                  />
                </CInputGroup>

                <CFormLabel> Result</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    defaultValue={'Pending'}
                    name='result'
                    placeholder="Result"
                    label="Result"
                    aria-describedby="basic-addon1"
                    ref={result}
                  />
                </CInputGroup>

                <CButton color="primary" onClick={getData} style={{ width: '100%' }}>Schedule Match Now</CButton>
              </CCardBody>
            </CCard>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ScheduleMatch