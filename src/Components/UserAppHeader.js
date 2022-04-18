import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {  cilMenu } from '@coreui/icons'

import { logo } from 'src/assets/brand/logo'

const UserAppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  let localData = JSON.parse(localStorage.getItem('userInfo'))
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.clear()
    navigate('/user-login', { replace: true })
  }

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="me-5">
          <h5  className='me-3'>Welcome {localData.username}</h5>
        </CHeaderNav>
          <CButton color="secondary" onClick={logOut} className='btn-sm' variant="outline">Logout</CButton>
      </CContainer>
    </CHeader>
  )
}

export default UserAppHeader
