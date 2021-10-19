import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

const Estados = () => {

    const nome = 'Antônio'
    const [contador, setContador] = useState(0)

    function adicionar() {
        setContador(contador + 1)
    }

    function subtrair() {
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>Estados</h1>
            <h2>{nome}</h2>
            <Button variant="danger" onClick={subtrair}> - </Button>
            {' '}<span>{contador}</span>{' '}
            <Button variant="success" onClick={adicionar}> + </Button>
        </div>
    )
}

export default Estados
