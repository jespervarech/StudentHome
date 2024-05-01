import Navbar from "./components/Navbar";
import Home from "./page/Home";
import HouseDetails from "./page/HouseDetails";
import Login from "./page/forms/Login";
import Signup from "./page/forms/Signup";
import "./styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houseDetails/:id" element={<HouseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
