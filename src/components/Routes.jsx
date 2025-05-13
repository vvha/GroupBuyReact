import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {ROUTES} from "../utils/routes"
import HomeComponent from './Home/HomeComponent'
import LoginComponent from "src/components/Login/LoginComponent";
const AppRoutes = () => (
    <Routes>
        <Route index path={ROUTES.HOME} element={<HomeComponent/>} />
        <Route index path={ROUTES.LOGIN} element={<LoginComponent/>} />
    </Routes>
);

export default AppRoutes