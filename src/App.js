import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Rotas from './Rotas';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Rotas />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;