import { Routes, Route, Outlet } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // For Bootstrap JavaScript components
// import './assets/css/style.css';


import { AuthProvider } from './assets/components/context/AuthContext'
import Home from './assets/components/home/Home';
import Contacts from './assets/components/pages/Contacts';
import AuthGuard from './assets/components/guards/AuthGuards';
import Footer from './assets/components/footer/Footer';
import Login from './assets/components/auth/Login';
import Register from './assets/components/auth/Register';
import { NavBar } from './assets/components/NavBar';
import Logout from './assets/components/auth/Logout';
import Vehicles from './assets/components/pages/Vehicles';
import HeaderWeb from './assets/components/headers/Header';
import Manage from './assets/components/pages/Manage';
import ContactManage from './assets/components/pages/ContactManage,.jsx';
import Page404 from './assets/components/pages/Page404.jsx';
import About from './assets/components/pages/About.jsx';

function App() {


  return (
    <>
      <AuthProvider>
        {/* <NavBar /> */}
        <HeaderWeb/>
        <Routes>
          <Route>
            {/* Without login */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/about" element={<About />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={"/logout"} element={<Logout />} />

          </Route>
          <Route element={<AuthGuard />}>

            {/* Admin Controll Panel */}
            <Route path="/manage" element={<Manage />} />  
                <Route path="/contactManage" element={<ContactManage />} />
            {/* <Route path="/edit-vehicle" element={<EditVehicles />} />
            <Route path="/get-all-vehicles" element={<GetAllVehicles />} /> */}
            {/* ************** */}



            {/* User Auth Panel */}
            {/* <Route path="/basket" element={<Basket />} />
            <Route path="/orders" element={<GetAllOrders />} /> */}
            {/* ************** */}
          </Route>


          {/* <Route path="*" element={<Page404 />} /> */}

        </Routes>
        {/* <Footer /> */}


      </AuthProvider>
    </>
  )
}

export default App
