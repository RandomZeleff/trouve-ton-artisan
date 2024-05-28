import { useState } from "react";
import {
  Navbar,
  Button,
  Form,
  Nav,
  ListGroup,
  Container,
} from "react-bootstrap";
import artisans from "../data/artisans.json";

export default function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      // Simuler des résultats de recherche pour la démonstration
      const results = artisans.filter(
        (artisan) =>
          artisan.name.toLowerCase().startsWith(value.toLowerCase()) ||
          artisan.localisation.toLowerCase().startsWith(value.toLowerCase()) ||
          artisan.speciality.toLowerCase().startsWith(value.toLowerCase())
      );

      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleBlur = () => {
    // Masquer les résultats lorsque l'utilisateur clique hors du menu
    setShowResults(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Trouve ton Artisan</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Bâtiment</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Fabrication</Nav.Link>
            <Nav.Link href="#action2">Alimentation</Nav.Link>
          </Nav>
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onBlur={handleBlur}
              onFocus={() => searchTerm.length > 2 && setShowResults(true)}
            />
            <Button variant="primary">
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
            {showResults && (
              <ListGroup className="position-absolute top-100 w-100 mt-2">
                {searchResults.map((result, index) => (
                  <ListGroup.Item key={index}>{result.name}</ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
