import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/login";
import AboutUs from "./pages/AboutUs";
import Footer from "./Components/Footer";
import Play from "./pages/play";
import Stats from "./pages/stats";
import SignUp from "./pages/signup";
import { useEffect } from "react";
import Navbar1 from "./Components/navBar1";
import Preview from "./pages/preview";
import Profile from "./pages/profile";

export default function App() {
  useEffect(() => {
    document.title = "TypeSprint";
  });
  return (
    <div className="App">
      <>
        {/* <Navbar /> */}
        <Navbar1 />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/play" element={<Play />} />
          <Route path="/Team" element={<OurTeam />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Footer />
      </>
    </div>
  );
}
