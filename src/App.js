import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Login from "./Components/login";
import AboutUs from "./pages/AboutUs";
import Footer from "./Components/Footer";
import Play from "./Components/play";
import Online from "./pages/online";
import Stats from "./pages/stats";
import SignUp from "./Components/signup";

export default function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<OurTeam />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/play" element={<Play />} />
          <Route path="/online" element={<Online />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Footer />
      </>
    </div>
  );
}
