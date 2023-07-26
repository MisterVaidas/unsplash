import { useState } from "react";
import axios from "axios";

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
      <h1>Find any image</h1>
      <input type="text" placeholder="Enter image subject" onChange={handleSearch} />
      <button onClick={getImage}>Explore!</button>
      {img && <img src={img} alt={searchQuery}></img>} 
    </div>
  );
}

export default App;
