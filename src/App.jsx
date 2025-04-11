// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PanelDetails from "./components/Panel";
import HackathonDetails from "./components/Hackathon";
import Committee from "./components/Committee";
import Registration from "./components/Registration";
import Companies from "./components/Companies";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import Hometown from "./components/Hometown";
import { AuthProvider } from "./context/AuthContext";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                    <Hero/>
                    <PanelDetails />
                    <HackathonDetails />
                    <Committee />
                    <Registration />
                    <Companies />
                    <Schedule />
                    <Sponsors />
                    <Hometown />
                    <About />
                    <Footer />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
