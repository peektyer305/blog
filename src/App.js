import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Createpost from "./components/Createpost";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
  <Router>
    <Navbar isAuth = {isAuth} />
    <Routes>
      <Route path="/" element ={<Home />} >
      </Route>
      <Route path="/login" element = {<Login setIsAuth = {setIsAuth}/>}></Route>
      <Route path="/createpost" element ={<Createpost isAuth = {isAuth}/>} >
      </Route>
      <Route path="/logout" element ={<Logout setIsAuth={setIsAuth}/>} >
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
