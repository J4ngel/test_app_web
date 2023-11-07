import { useState, useEffect } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import FirstComponent from "./components/FirstComponent"
import "./styles.css"

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log("Ejecutandose")
    // consumo de la api de leer productos
    fetch('https://test-server-z9m2.onrender.com/getProducts', {
      method: "GET"
    }).then(response => response.json()
      .then(data => setProducts(data.products))
      .catch(err => console.log(err))
    )
      .catch(errorResponse => console.log(errorResponse))
  }, [])
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<>
          <FirstComponent></FirstComponent>
          <FirstComponent />
          {products.length === 0 ?
            <h3>No hay productos registrados</h3> :
            products.map(producto => <div key={producto.id} className="fondo">
              <h3>ID: {producto.id}</h3>
              <p>Producto: {producto.nombre}</p>
              <p>{producto.precio}</p>
              <p>{producto.cantidad}</p>
            </div>)
          }
        </>} />
        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Routes>


    </HashRouter>
  );
}

export default App;
