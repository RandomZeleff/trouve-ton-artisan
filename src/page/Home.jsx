import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Homepage() {
  return (
    <Container fluid>
      {/* Hero */}
      <div>
        <h1 className="title">Comment trouver mon artisan ?</h1>
        <ListGroup className="d-flex flex-column align-items-start">
          <ListGroupItem>
            <p>
              <span className="stepIndex">1.</span> Choisir la catégorie
              d’artisanat dans le menu.
            </p>
          </ListGroupItem>
        </ListGroup>
      </div>
    </Container>
  );
}
