import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {ROUTES} from "../utils/routes"
import HomeComponent from './Home/HomeComponent'
const AppRoutes = () => (
    <Routes>
        <Route index path={ROUTES.HOME} element={<HomeComponent/>} />
    </Routes>
);

export default AppRoutes