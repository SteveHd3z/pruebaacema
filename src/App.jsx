import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import Login from "./components/pages/login";
import Home from "./components/pages/home";
import Search from "./components/pages/Search";
import { useAppContext } from "./context/appContext";

function PrivateRoute({ children }) {
  const { logged } = useAppContext();
  return logged ? children : <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;