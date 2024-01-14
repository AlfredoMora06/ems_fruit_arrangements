import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/0/home" element={<Home />} />
        <Route path="*" element={<Home to="/0/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
