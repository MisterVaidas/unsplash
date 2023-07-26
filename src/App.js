import { useState } from "react";
import axios from "axios";
import './styles.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [img, setImg] = useState('');

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }

  async function getImage() {
    const API = `http://localhost:8093/photos?subject=${searchQuery}`;

    try {
      const res = await axios.get(API);
      setImg(res.data[0].img_url);
    } catch (error) {
      console.error("There was an error fetching the image!", error);
    }
  }

  return (
    <div className="App">
      <h1 className="title">Find any image</h1>
      <input className="input" type="text" placeholder="Enter image subject" onChange={handleSearch} />
      <button className="button" onClick={getImage}>Explore!</button>
      {img && <img className="img" src={img} alt={searchQuery}></img>} 
    </div>
  );
}

export default App;
