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

const user_nav = [{

        component: CNavItem,
        name: 'Create Bid',
        to: '/create-bid'
    },
    {
        component: CNavItem,
        name: 'Cancel Bid',
        to: '/cancel-bid'
    },
    {
        component: CNavItem,
        name: 'Match Details',
        to: '/match-details'
    },
    {
        component: CNavItem,
        name: 'Match Schedule',
        to: '/match-schedule'
    },
    {
        component: CNavItem,
        name: 'Team Leader Board',
        to: '/team-leader-board'
    }
]

export default user_nav