import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/home.jsx';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
