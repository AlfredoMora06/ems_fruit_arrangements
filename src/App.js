import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import About from "./views/About"


function App() {
  return (
    <>
      <Routes>
        <Route path="/0/home" element={<Home />} />
        <Route path="/0/about" element={<About />} />
        <Route path="*" element={<Home to="/0/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
