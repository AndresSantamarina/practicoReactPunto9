import { Button, Form } from "react-bootstrap";
import CardMascota from "./CardMascota";

const Formulario = () => {
  return (
    <section>
      <Form>
        <h2>Llenar el formulario para crear una cita</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="container">
            <div className="row my-3 align-items-center">
              <div className="col-md-3">
                <Form.Label className="d-flex">Nombre de mascota:</Form.Label>
              </div>
              <div className="col-md-9">
                <Form.Control
                  type="text"
                  placeholder="Nombre de mascota"
                  required
                />
              </div>
            </div>
            <div className="row my-3 align-items-center">
              <div className="col-md-3">
                <Form.Label className="d-flex">Nombre del dueño:</Form.Label>
              </div>
              <div className="col-md-9">
                <Form.Control
                  type="text"
                  placeholder="Nombre del dueño"
                  required
                />
              </div>
            </div>
            <div className="row my-3 align-items-center">
              <div className="col-md-3">
                {" "}
                <Form.Label className="d-flex">Fecha:</Form.Label>
              </div>
              <div className="col-md-3">
                {" "}
                <Form.Control type="date" placeholder="dd/mm/yyy" required />
              </div>
              <div className="col-md-3">
                <Form.Label className="d-flex">Hora:</Form.Label>
              </div>
              <div className="col-md-3">
                {" "}
                <Form.Control type="time" placeholder="hh:mm" required />
              </div>
            </div>

            <div className="row my-3 align-items-center">
              <div className="col-md-3">
                {" "}
                <Form.Label className="d-flex">Síntomas:</Form.Label>
              </div>
              <div className="col-md-9">
                {" "}
                <Form.Control
                  type="text"
                  placeholder="Describir síntomas"
                  required
                />
              </div>
            </div>
          </div>
        </Form.Group>
        <Button type="submit">Agregar nueva cita</Button>
      </Form>

      <article className="container my-3">
        <div className="d-flex flex-wrap justify-content-center">
          <CardMascota />
          <CardMascota />
          <CardMascota />
          <CardMascota />
        </div>
      </article>
    </section>
  );
};

export default Formulario;
