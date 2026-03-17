import Header from "../components/header";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContext";

function Layout() {

  const { logged } = useAppContext();


  return (
    <>
      <Header>
        {logged && <Navbar />}
      </Header>
      <Outlet />
    </>
  );
}
export default Layout;