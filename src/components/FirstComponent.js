import { useState } from "react"

const FirstComponent = () => {
    const [cont, setCont] = useState(0)

    const add = () => {
        setCont(cont + 1)
    }

    return (
        <>
            <h1>Mi proyecto e-commerce</h1>
            <h2>Contador: {cont}</h2>
            <button onClick={add}>Aumentar</button>
            <button onClick={() => {
                setCont(cont - 1)
            }}>Disminuir</button>
        </>
    )
}

export default FirstComponent