import React from 'react'
import { Route, Switch } from 'react-router'
import HelloWorld from './components/HelloWorld'
import Arrays from './pages/Arrays'
import Estados from './pages/Estados'
import Objetos from './pages/Objetos'
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/Pagina2'

const Rotas = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HelloWorld} />
                <Route exact path="/pagina1" component={Pagina1} />
                <Route exact path="/pagina2" component={Pagina2} />
                <Route exact path="/arrays" component={Arrays} />
                <Route exact path="/objetos" component={Objetos} />
                <Route exact path="/estados" component={Estados} />
            </Switch>
        </div>
    )
}

export default Rotas
