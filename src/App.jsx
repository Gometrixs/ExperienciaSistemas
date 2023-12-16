import logoGpt from "./assets/logogpt.jpg";
import PhotoAlbum from "react-photo-album";

import "./App.css";

import { photos } from "./assets/photos";

function App() {
  return (
    <>
      <div>
        <img src={logoGpt} alt="react" width="300" />
      </div>
      <h1>Experiencia Oficina Sistemas - Navidad 2023</h1>
      <PhotoAlbum layout="masonry" photos={photos} />
    </>
  );
}

export default App;
