import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import WithoutNav from "./WithoutNav";
import NavBar from "./components/Navbar/NavBar";
import Login from "./routes/Login";
import AppAdmin from "./routes/Admin";
import WithNav from "./WithNav";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AppAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
