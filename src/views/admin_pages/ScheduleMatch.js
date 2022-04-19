import React, { useRef, useState } from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import { CCard, CCardBody } from '@coreui/react'
import { CButton, CFormLabel, CInputGroup, CFormInput } from '@coreui/react'

const ScheduleMatch = () => {
  const [validation, setValidation] = useState(false)
  const team_1_id = useRef()
  const team_2_id = useRef()
  const start_time = useRef()
  const end_time = useRef()
  const match_date = useRef()
  const result = useRef()


  const getData = () => {
    let data = {
      team_1_id: team_1_id.current.value,
      team_2_id: team_2_id.current.value,
      start_time: start_time.current.value,
      end_time: end_time.current.value,
      result: result.current.value,
      match_date: new Date(match_date.current.value)
    }

    if (
      data.team_1_id === ""
      || data.team_2_id === ""
      || data.start_time === ""
      || data.end_time === ""
      || data.result === ""
      || data.match_date === ""
    ) {
      setValidation(true);
      return
    } else if (data.team_1_id === ""
      && data.team_2_id === ""
      && data.start_time === ""
      && data.end_time === ""
      && data.result === ""
      && data.match_date === ""
    ) {
      setValidation(true);
      return
    }

    let payLoad = JSON.stringify({
      teamdetails: data.team_1_id,
      teamdetails2: data.team_2_id,
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
        location.reload();
      } else if (response.status === 404) {
        setValidation(true)
      }
    })
  }


  const onChange = () => {
    setValidation(false)
  }

  return (
    <div>
      <AdminSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AdminAppHeader />
        <div className="d-flex justify-content-center container">
          <form>
            <CCard style={{ width: '40rem' }}>
              {validation && <div className="alert alert-danger" role="alert">
                Please fill all the mandatory fields!!
              </div>
              }
              <CCardBody>
                <h1>Schedule Match</h1>

                <CFormLabel> Team 1 ID</CFormLabel>
                <CInputGroup className="mb-3">
                  <CFormInput
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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