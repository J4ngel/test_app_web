import { useState, useEffect } from "react"
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
    <>
      <FirstComponent></FirstComponent>
      <FirstComponent />
      {products.length === 0 ?
      <h3>No hay productos registrados</h3>:
      products.map(producto => <div key={producto.id} className="fondo">
      <h3>ID: {producto.id}</h3>
      <p>Producto: {producto.nombre}</p>
      <p>{producto.precio}</p>
      <p>{producto.cantidad}</p>
      </div>)
      }
    </>
  );
}

export default App;
