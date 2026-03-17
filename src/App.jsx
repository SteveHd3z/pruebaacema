import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Login from "./components/pages/login";
import Home from "./components/pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;