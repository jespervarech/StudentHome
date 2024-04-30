import Navbar from "./components/Navbar";
import Home from "./page/Home";
import HouseDetails from "./page/HouseDetails";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
