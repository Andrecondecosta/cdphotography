import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Login from './components/login/login';

const API_URL = 'http://localhost:3000/api/v1/photos';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
