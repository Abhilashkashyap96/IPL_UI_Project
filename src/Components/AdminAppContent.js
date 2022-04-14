import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config

const AdminAppContent = () => {
  return (
    <CContainer lg>
      <h1>Hello This Is Content</h1>
    </CContainer>
  )
}

export default React.memo(AdminAppContent)
