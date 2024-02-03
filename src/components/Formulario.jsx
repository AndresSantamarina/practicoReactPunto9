import { Button, Form } from "react-bootstrap";
import CardMascota from "./CardMascota";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [cita, setCita] = useState({
    nombreMascota: "",
    nombreDuenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const datosLocalStorage = JSON.parse(localStorage.getItem("citasKey")) || [];
  const [citas, setCitas] = useState(datosLocalStorage);

  useEffect(() => {
    localStorage.setItem("citasKey", JSON.stringify(citas));
  }, [citas]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCita({ ...cita, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCitas([...citas, cita]);
    setCita({
      nombreMascota: "",
      nombreDuenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  const borrarCita = (nombreMascota) => {
    const citasFiltradas = citas.filter((cita) => cita !== nombreMascota);
    setCitas(citasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
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
                  minLength={3}
                  maxLength={20}
                  name="nombreMascota"
                  value={cita.nombreMascota}
                  onChange={handleChange}
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
                  minLength={3}
                  maxLength={40}
                  name="nombreDuenio"
                  value={cita.nombreDuenio}
                  onChange={handleChange}
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
                <Form.Control
                  type="date"
                  placeholder="dd/mm/yyy"
                  required
                  name="fecha"
                  value={cita.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <Form.Label className="d-flex">Hora:</Form.Label>
              </div>
              <div className="col-md-3">
                {" "}
                <Form.Control
                  type="time"
                  placeholder="hh:mm"
                  required
                  name="hora"
                  value={cita.hora}
                  onChange={handleChange}
                />
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
                  minLength={5}
                  maxLength={80}
                  name="sintomas"
                  value={cita.sintomas}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Form.Group>
        <Button type="submit">Agregar nueva cita</Button>
      </Form>
      <article className="container my-3">
        <div className="d-flex flex-wrap justify-content-center">
          <CardMascota arrayCitas={citas} borrarCita={borrarCita} />
        </div>
      </article>
    </section>
  );
};

export default Formulario;
