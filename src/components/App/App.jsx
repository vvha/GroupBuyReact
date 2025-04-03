import { Routes, Route, Link } from 'react-router-dom';
import HeaderComponent from "../Header/HeaderComponent";
import SideBarComponent from "../SideBar/SideBarComponent";
import FooterComponent from "../Footer/FooterComponent";
import classes from "./App.module.scss";
import AppRoutes from "../Routes";

function App() {
  return (
      <div className={classes.app_container}>
        <HeaderComponent/>
        <SideBarComponent/>
        <AppRoutes/>
        <FooterComponent/>
      </div>
  );
}

export default App;
