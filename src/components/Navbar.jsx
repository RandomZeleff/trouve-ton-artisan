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
import SearchResult from "./SearchResult";

export default function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      // Recherche des artisans en fonction de son nom, ville ou spécialité.
      const results = artisans
        .filter(
          (artisan) =>
            artisan.name.toLowerCase().startsWith(value.toLowerCase()) ||
            artisan.localisation
              .toLowerCase()
              .startsWith(value.toLowerCase()) ||
            artisan.speciality.toLowerCase().startsWith(value.toLowerCase())
        )
        .sort((a, b) => b.note - a.note) // Tri par note
        .slice(0, 5); // Récupère uniquement les 5 premiers résultats

      // Met à jour les résultats.
      setSearchResults(results);

      // Affiche les résultats.
      setShowResults(true);
    } else {
      // Clear les résultats.
      setSearchResults([]);

      // Ne plus afficher les résultats.
      setShowResults(false);
    }
  };

  return (
    <Navbar expand="lg">
      <Container className="d-flex" fluid>
        <Navbar.Brand href="/">
          <img
            src="./img/logo.png"
            alt="Site logo"
            style={{ maxWidth: "200px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/category/batiment">Bâtiment</Nav.Link>
            <Nav.Link href="/category/services">Services</Nav.Link>
            <Nav.Link href="/category/fabrication">Fabrication</Nav.Link>
            <Nav.Link href="/category/alimentation">Alimentation</Nav.Link>
          </Nav>
          <Form className="d-flex position-relative col-lg-5">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => searchTerm.length > 2 && setShowResults(true)}
            />
            <Button variant="primary">
              <i className="fa-solid fa-magnifying-glass" />
            </Button>
            {showResults && (
              <ListGroup className="position-absolute top-100 w-100 mt-2 z-3">
                {searchResults.map((result, index) => (
                  <SearchResult key={index} result={result} />
                ))}
              </ListGroup>
            )}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
