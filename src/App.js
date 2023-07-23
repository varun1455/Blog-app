

import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <>
    {/* <Register/> */}
    {/* <Login/> */}
    <Router>
      <Topbar/>
      
      
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
          
        </Routes>
        <Routes>
        <Route path="/posts" element={<Homepage />}/>
          
        </Routes>
        <Routes>
        <Route path="/register" element={currentUser ? (<Register />): (<Navigate replace={true} to = {'/'}/>) } />
          
        </Routes>
        <Routes>
        <Route path="/login"  element={currentUser ? (<Login />): (<Navigate replace={true}  to = {'/'}/>) } />
       </Routes>
       <Routes>
        <Route path="/post/:id" element={<Single />}/>
          
        </Routes>
        <Routes>
        <Route path="/write" element={currentUser ? ( <Write /> ): (<Navigate replace={true} to = {'/login'}/>)} />
        </Routes>
        <Routes>
        
        <Route path="/settings" element={currentUser ? (<Settings /> ) : (<Navigate replace={true}  to = {'/login'}/>)}/>
          
        </Routes>
     
    </Router>
    </>
  );
}

export default App;

