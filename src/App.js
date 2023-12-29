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
import Dashboard from './pages/client/Dashboard';
import BusAdd from './pages/admin/BusAdd';
import BusEdit from './pages/admin/BusEdit';
import EditProfile from './pages/client/EditProfile';
import Profile from './pages/client/Profile';




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
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/bus/add" element={<BusAdd />} />
              <Route path="/bus/edit" element={<BusEdit />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;


{/* <Route path='/admin'
                element={
                  <Protected isLoggedIn={isLoggedIn}>
                    <AdminPage />
                  </Protected>
                }
              /> */}
