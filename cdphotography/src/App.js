import './App.css';
import axios from 'axios';
import Photos from './components/photos';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/v1/photos';

function getAPIData() {
  return axios.get(API_URL).then(response => response.data);

}

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setPhotos(items);
      }
    });

    return () => mounted = false;
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <Photos photos={photos} />
    </div>
  );
}

export default App;
