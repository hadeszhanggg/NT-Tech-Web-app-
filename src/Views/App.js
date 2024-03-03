import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSide from '../Components/Login/Login';
import SignUpSide from '../Components/Signup/Signup';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUpSide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
