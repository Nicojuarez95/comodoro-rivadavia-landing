import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/home.jsx';
import SignIn from './Components/Signin';
import SignUp from "./Components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './stateProvider.js';
import { actionTypes } from './reducer.js';

function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch({
          type:actionTypes.SET_USER,
          user: authUser
        })
      } else {
          dispatch({
            type: actionTypes.SET_USER,
            user: null,
          })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iniciarsesion" element={<SignIn />} />
          <Route path="/registro" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
