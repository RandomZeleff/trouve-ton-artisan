import { useState } from "react";
import {
  Navbar,
  Button,
  Form,
  Nav,
  ListGroup,
  Container,
  Image,
} from "react-bootstrap";
import artisans from "../data/artisans.json";
import {} from "react-router-dom";
import createStarsNote from "../functions/createStarsNote";
import { Link } from "react-router-dom";

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
        <Navbar.Brand href="#">
          <img src="./img/logo.png" alt="" />
        </Navbar.Brand>
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
          <Form className="d-flex position-relative col-lg-5">
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
                  <ListGroup.Item key={index}>
                    <Link className="d-flex gap-3">
                      {/* Image de l'artisan */}
                      <div>
                        <Image
                          src={result.image}
                          alt={`Photo de ${result.name}`}
                          style={{
                            maxWidth: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                          className="rounded-1"
                        />
                      </div>

                      {/* Informations de l'artisan */}
                      <div>
                        <h4 className="h6 title">{result.name}</h4>
                        <p className="text-xs">
                          <span style={{ fontWeight: "bold" }}>
                            Spécialité:
                          </span>{" "}
                          {result.speciality}
                          <br />
                          <span style={{ fontWeight: "bold" }}>Note:</span>{" "}
                          {createStarsNote(result.note)}
                        </p>
                      </div>
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
