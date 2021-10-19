import React from 'react'
import { Button } from 'react-bootstrap'

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>Parágrafo</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, veritatis eveniet earum, fugiat porro vel voluptatibus fuga dicta unde quod temporibus rerum non nisi. Harum recusandae sint ipsa maiores nisi.</p>

            <Button variant="primary">Salvar</Button>
            <Button variant="danger">Salvar</Button>
            <Button variant="success">Salvar</Button>
        </div>
    )
}

export default HelloWorld
