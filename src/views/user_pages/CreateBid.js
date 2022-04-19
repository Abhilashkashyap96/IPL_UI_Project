import React, { useRef, useState } from 'react'
import { UserAppSidebar, UserAppHeader } from '../../Components/index'
import { CInputGroup, CFormInput, CFormLabel, CButton, CCard, CCardBody } from '@coreui/react'

const CreateBid = () => {
  const [validation, setValidation] = useState(false)

  const user_opinion1 = useRef();
  const user_opinion2 = useRef();
  const match_id = useRef();

  const getInput = () => {
    let data = {
      user_opinion1: user_opinion1.current.value,
      user_opinion2: user_opinion2.current.value,
      match_id: match_id.current.value
    }

    if (
      data.user_opinion1 === ""
      || data.user_opinion2 === ""
      || data.match_id === ""
    ) {
      setValidation(true);
      return
    } else if (data.user_opinion1 === ""
      && data.user_opinion2 === ""
      && data.match_id === ""
    ) {
      setValidation(true);
      return
    }

    fetch("http://localhost:8080/user/bid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        match_id: data.match_id,
        user_opinion1: data.user_opinion1,
        user_opinion2: data.user_opinion2,
      }).then((response) => {
        if (response.ok) {
          location.reload();
        } else if (response.status === 404) {
          setValidation(true)
        }
      }),
    })
  }

  const onChange = () => {
    setValidation(false)
  }


  return (
    <div>
      <UserAppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <UserAppHeader />
        <div className="body px-3">
          <div className=' d-flex justify-content-center mt-6 container'>
            <form >
              <CCard style={{ width: '30rem ' }}>
                {validation && <div className="alert alert-danger" role="alert">
                  Please fill all the mandatory fields!!
                </div>
                }
                <CCardBody>
                  <h1>Create Bid</h1>
                  <CFormLabel> Who will win</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={onChange}
                      name='user_opinion1'
                      placeholder="who will win"
                      aria-label="who will win"
                      aria-describedby="basic-addon1"
                      ref={user_opinion1}
                    />
                  </CInputGroup>

                  <CFormLabel> Who will score maximum</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={onChange}
                      name='user_opinion2'
                      placeholder="Who will score maximum"
                      aria-label="Who will score maximum"
                      aria-describedby="basic-addon1"
                      ref={user_opinion2}
                    />
                  </CInputGroup>

                  <CFormLabel> Enter Match Id</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      onChange={onChange}
                      name='match_id'
                      placeholder="Match Id"
                      aria-describedby="basic-addon1"
                      ref={match_id}
                    />
                  </CInputGroup>

                  <CButton type='button' onClick={getInput} color="primary" style={{ width: '100%' }}>Bid now</CButton>
                </CCardBody>
              </CCard>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBid