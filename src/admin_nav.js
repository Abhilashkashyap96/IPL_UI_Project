import React from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilBell,
    cilCalculator,
    cilChartPie,
    cilCursor,
    cilDrop,
    cilNotes,
    cilPencil,
    cilPuzzle,
    cilSpeedometer,
    cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const admin_nav = [{
        component: CNavItem,
        name: 'Create Tournament',
        to: '/create-tournament'
    },
    {
        component: CNavItem,
        name: 'Create Teams',
        to: '/create-teams'
    },
    {
        component: CNavItem,
        name: 'Schedule Match',
        to: '/schedule-match'
    },
    {
        component: CNavItem,
        name: 'Update Teams',
        to: '/update-teams'
    },
    {
        component: CNavItem,
        name: 'Add Result',
        to: '/add-result'
    },
    {
        component: CNavItem,
        name: 'Bidding List',
        to: '/bidding-list'
    },
]

export default admin_nav