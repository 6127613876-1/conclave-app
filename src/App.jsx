import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import About from './components/About';
import Panel from './components/Panel';
import HackathonDetails from './components/HackatonDetails'; // Correct import for HackathonDetails
import Committee from './components/Committee';
import Registration from './components/Registration';
import Companies from './components/Companies';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Hometown from './components/Hometown';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Hackathon from './components/Hackathon'; // Correct import for Hackathon

function App() {
  return (
    // <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route for Login */}
          {/* <Route path="/login" element={<Login />} /> */}

          {/* Protected Routes */}
          <Route
            path="*"
            element={
              // <ProtectedRoute>
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/hometown" element={<Hometown />} />
                    <Route path="/committee" element={<Committee />} />
                    <Route path="/schedule" element={<Schedule />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/panel" element={<Panel />} />
                    <Route path="/hackathon" element={<Hackathon />} />
                    <Route path="/hackathon/:id" element={<HackathonDetails />} /> {/* Ensure correct path */}
                    <Route path="/registration" element={<Registration />} />
                  </Routes>
                  <Footer />
                </>
              // </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    // {/* </AuthProvider> */}
  );
}

export default App;
