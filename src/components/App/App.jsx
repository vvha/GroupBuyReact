import HeaderComponent from "../Header/HeaderComponent";
import SideBarComponent from "../SideBar/SideBarComponent";
import FooterComponent from "../Footer/FooterComponent";
import classes from "./App.module.scss";
import AppRoutes from "../Routes";

function App() {
  return (
      <div className={classes.app_container}>
        {window.location.pathname !== "/login" && window.location.pathname !== "/register" && <HeaderComponent/>}
        {window.location.pathname !== "/login" && window.location.pathname !== "/register" && <SideBarComponent/>}
        <AppRoutes/>
        {window.location.pathname !== "/login" && window.location.pathname !== "/register" && <FooterComponent/>}
      </div>
  );
}

export default App;
