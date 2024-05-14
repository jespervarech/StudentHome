import Navbar from "./components/Navbar";
import Home from "./page/Home";
import HouseDetails from "./page/HouseDetails";
import HousesListBySearch from "./page/HousesListBySearch";
import Forgot from "./page/forms/Forgot";
import Login from "./page/forms/Login";
import Reset from "./page/forms/Reset";
import Signup from "./page/forms/Signup";
import "./styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

function NavigationNavbar() {
  const location = useLocation();
  const isNavbarVisible = ![
    "/signup",
    "/login",
    "/forgotPassword",
    "/resetPassword",
    "*",
  ].includes(location.pathname);

  return isNavbarVisible ? <Navbar /> : null;
}
function App() {
  return (
    <BrowserRouter>
      <NavigationNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/houseDetails/:id" element={<HouseDetails />} />
        <Route path="/houseList" element={<HousesListBySearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/resetPassword" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
