import Header from "../components/header";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Outlet />
    </>
  );
}
export default Layout;