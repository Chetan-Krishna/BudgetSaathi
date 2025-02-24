import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import SplashScreen from './components/SplashScreen';
import Dashboard from './Pages/Dashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </BrowserRouter>

  </StrictMode>
);
 export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import App from './App';
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
// import SplashScreen from './components/SplashScreen';
// import Dashboard from './Pages/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';

// // Create Protected Route component
// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem('authToken');
//   return isAuthenticated ? children : <Navigate to="/" replace />;
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           {/* Public Routes */}
//           <Route index element={<Login />} />
//           <Route path="signup" element={<Signup />} />

//           {/* Protected Routes */}
//           <Route path="splash" element={
//             <ProtectedRoute>
//               <SplashScreen />
//             </ProtectedRoute>
//           }/>
//           <Route path="dashboard" element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }/>
//         </Route>
//       </Routes>
//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </BrowserRouter>
//   </React.StrictMode>
// );