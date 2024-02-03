import { Button, Card, CardFooter, CardHeader, Image } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const CardMascota = () => {
  return (
    <Card className="cardMascota m-2">
      <CardHeader>
        <div className="row">
          <div className="col-md-3">
            <Image src="..\src\assets\defaultMascota.png" rounded fluid className="imgMascota"/>
          </div>
          <div className="col-md-9">
            <Card.Title>Mascota: Firulais</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dueño: Pepe
            </Card.Subtitle>
          </div>
        </div>
      </CardHeader>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>Fecha:</ListGroup.Item>
          <ListGroup.Item>Hora:</ListGroup.Item>
          <ListGroup.Item>Síntomas:</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <CardFooter>
        <Button variant="danger" className="d-flex ms-auto">
          Borrar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardMascota;
