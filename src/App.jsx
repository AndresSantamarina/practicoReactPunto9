import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="text-center mainPage">
        <h1 className="display-6 text-center my-3">
          Administrador pacientes de veterinaria
        </h1>
        <Formulario />
      </Container>
    </>
  );
}

export default App;
