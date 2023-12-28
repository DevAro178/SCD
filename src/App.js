import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './components/Protected';
import AdminPage from './pages/admin/AdminPage';
import { useState } from 'react';
import Header from './components/Header';
import BusDetails from './pages/BusDetails';
import Booking from "./pages/client/Booking";




function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <div className="App">
      <Router>
        <Header />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/bus/:id" element={<BusDetails />} />
              <Route path="/booking/:id" element={<Booking />} />
              {/* <Route path='/admin'
                element={
                  <Protected isLoggedIn={isLoggedIn}>
                    <AdminPage />
                  </Protected>
                }
              /> */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
