import React, { useRef, useState  } from 'react'
import { AdminAppHeader, AdminSidebar } from '../../Components/index'
import { CCard,CCardBody} from '@coreui/react'
import {CButton, CFormLabel,CInputGroup,CFormInput,CFormCheck } from '@coreui/react'

const CreateTeams = () => {
  const [validation, setValidation] = useState(false)

  const team_name = useRef();
  const home_ground = useRef();
  const team_players = useRef();
  const captain = useRef();

  const getInput = () => {
    let data = {
      team_name: team_name.current.value,
      home_ground: home_ground.current.value,
      team_players: team_players.current.value,
      captain: captain.current.value
    }

    if (
      data.team_name === ""
      || data.home_ground === ""
      || data.team_players === ""
      || data.captain === ""
    ) {
      setValidation(true);
      return
    } else if (data.team_name === ""
      && data.home_ground === ""
      && data.team_players === ""
      && data.captain === ""
    ) {
      setValidation(true);
      return
    }

     fetch("http://localhost:8080/admin/create-team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        team_name: data.team_name,
        home_ground: data.home_ground,
        team_players: data.team_players,
        captain: data.captain
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
        <CCard style={{ width:'40rem' }}>
        {validation && <div className="alert alert-danger" role="alert">
              Please fill all the mandatory fields!!
            </div>
            }
          <CCardBody>
            <h3>Create Teams</h3>
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

            <CFormLabel >Home Ground</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput 
              onChange={onChange}
              name='home_ground'
              placeholder="Home Ground"  
              aria-describedby="basic-addon1" 
              ref={home_ground}
              />
            </CInputGroup>

            <CFormLabel >Team Players</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput 
              onChange={onChange}
              name='team_players'
              placeholder="Team Players"  
              aria-describedby="basic-addon1" 
              ref={team_players}
              />
            </CInputGroup>

            <CFormLabel >Captain</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput 
              onChange={onChange}
              name='captain'
              placeholder="Captain"  
              aria-describedby="basic-addon1" 
              ref={captain}
              />
            </CInputGroup>
            <CButton color="primary" onClick={getInput} variant="outline" style={{width:'100%'}}>Create New Team</CButton>
          </CCardBody>
        </CCard>
      </div>
    </div>
  </div>

  )
}

export default CreateTeams