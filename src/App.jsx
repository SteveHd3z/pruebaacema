import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/api1" element={<Api1 />} />
          <Route path="/api2" element={<Api2 />} />
          <Route path="/api3" element={<Api3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;