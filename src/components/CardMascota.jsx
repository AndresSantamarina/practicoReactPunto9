import { Button, Card, CardFooter, CardHeader, Image } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const CardMascota = ({ arrayCitas, borrarCita }) => {
  return (
    <>
      {arrayCitas.map((cita, posicionCita) => (
        <Card className="cardMascota m-2" key={posicionCita}>
          <CardHeader>
            <div className="row">
              <div className="col-md-3">
                <Image
                  src="https://images.emojiterra.com/google/android-12l/512px/1f535.png"
                  rounded
                  fluid
                  className="imgMascota"
                />
              </div>
              <div className="col-md-9">
                <Card.Title>Mascota: {cita.nombreMascota}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Dueño: {cita.nombreDuenio}
                </Card.Subtitle>
              </div>
            </div>
          </CardHeader>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>Fecha: {cita.fecha}</ListGroup.Item>
              <ListGroup.Item>Hora: {cita.hora}</ListGroup.Item>
              <ListGroup.Item>Síntomas: {cita.sintomas}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <CardFooter>
            <Button
              variant="danger"
              className="d-flex ms-auto"
              onClick={() => borrarCita(cita)}
            >
              Borrar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardMascota;
