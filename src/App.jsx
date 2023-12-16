import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PhotoAlbum from "react-photo-album";

import "./App.css";

import { photos } from "./assets/photos";

function App() {
  return (
    <>
      <div>
        <img src={reactLogo} alt="react" width="100" />
        <img src={viteLogo} alt="vite" width="100" />
      </div>
      <h1>Experiencia Oficina Sistemas - Navidad 2023</h1>
      <PhotoAlbum layout="masonry" photos={photos} />
    </>
  );
}

export default App;
