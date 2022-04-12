import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import { Icon } from '@iconify/react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex align-item-center" to="/dashboard">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'column',
            border: '2px solid white',
            padding: '5px',
            margin: '10px',
            borderRadius: '10px',
            cursor:'pointer'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon className="big-icon" icon="mdi:cricket" />
            <h3 style={{ marginLeft: '10px' }}>IPL</h3>
          </div>
          <div>
            <p>Fantacy League</p>
          </div>
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
