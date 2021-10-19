import React from 'react'

const Arrays = () => {

    const nome = 'Antônio Augusto Pinto Gama dos Santos';
    const idade = 19;
    const existe = false;
    const carros = [
        'Fiat 147', 
        'Fuscão', 
        'Brasília Amarela', 
        'Passatão', 
        'Kombão do Lost'
    ];

    return (
        <div>
            <h1>Arrays</h1>

            <ol>
            {
                carros.filter(filtro => ( filtro.endsWith('o'))).map(carro => (
                    <li>{carro}</li>
                ))
            }
            </ol>

        </div>
    )
}

export default Arrays