import { useState } from "react";
import { GifGrid, Input } from "./components";

function GifExpertApp() {
  const [categorias, setCategorias] = useState([]);

  const agregarCategoria = (nuevaCategoria) => {
    if (categorias.includes(nuevaCategoria)) return;
    setCategorias([nuevaCategoria, ...categorias]);
  };

  return (
    <>
      <h1 className="titulo">App Gifs</h1>
      <Input onNewCategoria={agregarCategoria} />

      {categorias.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
}

export default GifExpertApp;
