import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div>
        <h1>Error 404</h1>
        <p>Il semblerait que cette page n'existe pas.. :c</p>
      </div>
    </Container>
  );
}
