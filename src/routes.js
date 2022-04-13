import React from 'react'

const Dashboard = React.lazy(() =>
    import ('./views/dashboard/Dashboard'))
const routes = [
    // { path: '/dashboard', name: 'Dashboard', element: null },

]

export default routes