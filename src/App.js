import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import WithoutNav from "./WithoutNav";
import Navbar from "./components/Navbar/NavBar";
import Login from "./routes/Login";
import AppAdmin from "./routes/Admin";
import RatingAlert from "./RatingReport/RatingAlert";
import WithNav from "./WithNav";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/admin" element={<AppAdmin />} />
        <Route path="/admin/alert" element={<RatingAlert />} />
      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Detail from "./routes/Detail";
// import Home from "./routes/Home";
// import WithoutNav from "./WithoutNav";
// // import NavBar from "./components/Navbar/NavBar";
// import Login from "./routes/Login";
// import AppAdmin from "./routes/Admin";
// import WithNav from "./WithNav";

// function App() {
//   return (
//     <Routes>
//       <Route element={<WithNav />}>
//         <Route path="/" element={<Home />} />
//         {/*<Route path="/detail/:id" element={<Detail />} /> */}
//       </Route>
//       <Route element={<WithoutNav />}>
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AppAdmin />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
