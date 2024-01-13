import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/updatePassword";
import DashBoard from './pages/DashBoard';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="w-screen min-h-[100vh] bg-slate-900" >
       <div className='flex items-center justify-center text-white font-extrabold min-h-screen'>
<button>
  
<Link to ="https://mediafiles.botpress.cloud/dceeb897-1d39-4a82-b41f-19c3e2a13d62/webchat/bot.html" >
  wel-come to RBI chat-bot</Link> 

</button>
</div>
      <NavBar/>
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>

        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/update-password/:id" element={<UpdatePassword/>}></Route>
      
      </Routes> */}

    </div>
  );
}

export default App;
