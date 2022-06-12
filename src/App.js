import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

import Navbar from "./components/Navbar/NavBar";
import Login from "./routes/Login";
import AppAdmin from "./routes/Admin";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:uuid" element={<Detail />} />
        <Route path="/admin" element={<AppAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
