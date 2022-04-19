import React, { useRef, useState } from 'react'
import { AdminAppHeader, AdminAppContent, AdminSidebar } from '../../Components/index'
import { CCard, CCardBody } from '@coreui/react'
import { CButton, CFormLabel, CInputGroup, CFormInput, CFormCheck } from '@coreui/react'

const AddResult = () => {
  const [validation, setValidation] = useState(false)

  const team_name = useRef();
  const matches_played = useRef();
  const matches_won = useRef();
  const matches_lost = useRef();
  const match_drawn = useRef();
  const points = useRef();

  const getInput = () => {
    let data = {
      team_name: team_name.current.value,
      matches_played: matches_played.current.value,
      matches_won: matches_won.current.value,
      matches_lost: matches_lost.current.value,
      match_drawn: match_drawn.current.value,
      points: points.current.value
    }

    if (
      data.team_name === ""
      || data.matches_played === ""
      || data.matches_won === ""
      || data.matches_lost === ""
      || data.match_drawn === ""
      || data.points === ""
    ) {
      setValidation(true);
      return
    } else if (data.team_name === ""
      && data.matches_played === ""
      && data.matches_won === ""
      && data.matches_lost === ""
      && data.match_drawn === ""
      && data.points === ""
    ) {
      setValidation(true);
      return
    }


    fetch("http://localhost:8080/admin/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        team_name: data.team_name,
        matches_played: data.matches_played,
        matches_won: data.matches_won,
        matches_lost: data.matches_lost,
        match_drawn: data.match_drawn,
        points: data.points,
      }).then((response) => {
        if (response.ok) {
          location.reload();
        } else if (response.status === 404) {
          setValidation(true)
        }
      }),
    });
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
          <CCard style={{ width: '40rem' }}>
            {validation && <div className="alert alert-danger" role="alert">
              Please fill all the mandatory fields!!
            </div>
            }
            <CCardBody>
              <h3>Add Result</h3>
              <CFormLabel >Team Name</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={onChange}
                  name='team_name'
                  placeholder="Team Name"
                  aria-describedby="basic-addon1"
                  ref={team_name}
                />
              </CInputGroup>
              <CFormLabel >Matches Played</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={onChange}
                  name='matches_played'
                  placeholder="Matches Played"
                  aria-describedby="basic-addon1"
                  ref={matches_played}
                />
              </CInputGroup>
              <CFormLabel >Matches Won</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={onChange}
                  name='matches_won'
                  placeholder="Matches Won"
                  aria-describedby="basic-addon1"
                  ref={matches_won}
                />
              </CInputGroup>
              <CFormLabel >Matches Lost</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={onChange} 
                  name='matches_lost'
                  placeholder="Matches Lost"
                  aria-describedby="basic-addon1"
                  ref={matches_lost}
                />
              </CInputGroup>
              <CFormLabel >Matches Draw</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={onChange}
                  name='match_drawn'
                  placeholder="Matches Draw"
                  aria-describedby="basic-addon1"
                  ref={match_drawn}
                />
              </CInputGroup>
              <CFormLabel >Points</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput
                  onChange={onChange}
                  name='points'
                  placeholder="Points"
                  aria-describedby="basic-addon1"
                  ref={points}
                />
              </CInputGroup>
              <CButton color="primary" onClick={getInput} variant="outline" style={{ width: '100%' }}>Add Results</CButton>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  )
}

export default AddResult