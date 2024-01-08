import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './components/Protected';
import IsAdmin from './components/IsAdmin';
import IsLoggedOut from './components/IsLoggedOut';
import AdminPage from './pages/admin/AdminPage';
import FAQ from './pages/FAQ';
import { useState } from 'react';
import Header from './components/Header';
import BusDetails from './pages/BusDetails';
import Booking from "./pages/client/Booking";
import Dashboard from './pages/client/Dashboard';
import BusAdd from './pages/admin/BusAdd';
import BusEdit from './pages/admin/BusEdit';
import EditProfile from './pages/client/EditProfile';
import Profile from './pages/client/Profile';
import { setAccess, setRefresh } from './redux/user';
import LoginUnitTest from './pages/LoginUnitTest';

function App() {
  
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const { access, superuser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
useEffect(() => {
  setisLoggedIn(!!access);
  setisAdmin(!!access && superuser);
}, [access, superuser]);
  useEffect(() => {
    if(access){
      const interval = setInterval(async () => {
        // Replace with your actual API call
        const response = await fetch('/api/refresh-token');
        const data = await response.json();
        dispatch(setRefresh(data.refresh));
        dispatch(setAccess(data.access));
        console.log(data);
      }, 2700000); // 2700000 ms = 45 minutes
      
      // Clear interval on component unmount
      return () => clearInterval(interval);
    }
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
        <Header />
            <Routes>
              
              <Route path="/login" element={
                  <IsLoggedOut isLoggedIn={!isLoggedIn}>
                    <LoginPage />
                  </IsLoggedOut>
                } />
              <Route path="/signup" element={
                  <IsLoggedOut isLoggedIn={!isLoggedIn}>
                    <SignupPage />
                  </IsLoggedOut>
                } />
              <Route path="/bus/:id" element={<BusDetails />} />
              <Route path="/booking/:id" element={
                  <Protected isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                    <Booking />
                  </Protected>
                } />
              {/* Route for FAQ page */}
              <Route path="/faq" element={
                    <FAQ />
                } />
              <Route path="/" element={
                  <Protected isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                    <Dashboard />
                  </Protected>
                } />
              <Route path="/profile" element={
                  <Protected isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                    <Profile />
                  </Protected>
                } />
              <Route path="/profile/edit"element={
                  <Protected isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                    <EditProfile />
                  </Protected>
                } />
                <Route path="/admin" element={
                    <IsAdmin isAdmin={isAdmin}>
                      <AdminPage />
                    </IsAdmin>
                  } />
                <Route path="/bus/add" element={
                    <IsAdmin isAdmin={isAdmin}>
                      <BusAdd />
                    </IsAdmin>
                  } />
                <Route path="/bus/edit/:id" element={
                    <IsAdmin isAdmin={isAdmin}>
                      <BusEdit />
                    </IsAdmin>
                  } />
                <Route path="/login/unitTest" element={
                  <LoginUnitTest />
                } />
              
            </Routes>
        </Router>
    </div>
  );
}

export default App;


{/* <Route path='/admin'
                element={
                  <Protected isLoggedIn={isLoggedIn}>
                    < />
                  </Protected>
                }
              /> */}
