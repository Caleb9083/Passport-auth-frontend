import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar/Navbar';
import Home from "./pages/HomePage/Home"
import Login from "./pages/LoginPage/Login"
import SignUp from "./pages/SignUpPage/SignUp"


function App() {

  return (
    <div className="App">
       <BrowserRouter>
       <NavbarComponent />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Home />} />
              <Route path="/pricing" element={<Home />} />
              <Route path="/signin-auth" element={<Login />} />
              <Route path="/signup-auth" element={<SignUp />} />
            </Routes>
          </div>
          
        </BrowserRouter>
    </div>
  )
}

export default App
