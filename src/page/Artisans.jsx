import { Button, Container, Form } from "react-bootstrap";
import artisans from "../data/artisans.json";
import ArtisanCard from "../components/ArtisanCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ArtisansPage() {
  const { id } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(artisans);
  const categoryToSearch = id ? id.charAt(0).toUpperCase() + id.slice(1) : null;

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
    } else {
      // Clear les résultats.
      setSearchResults(artisans);
    }
  };

  useEffect(() => {
    if (id) {
      const results = artisans.filter(
        (artisan) => artisan.category.toLowerCase() === id.toLowerCase()
      );

      setSearchResults(results);
    }
  }, []);

  return (
    <Container>
      <h1 className="title my-3">Liste des artisans</h1>

      {!id && (
        <Form className="d-flex position-relative mb-3">
          <Form.Control
            type="search"
            placeholder="Rechercher"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => searchTerm.length > 2}
          />
          <Button variant="primary">
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </Form>
      )}

      <p
        style={{
          display: `${id ? "block" : "none"}`,
        }}
      >
        Liste des artisans ayant pour spécialité{" "}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {categoryToSearch}
        </span>
        .
      </p>

      <div className="d-flex flex-column gap-3">
        {searchResults.map((artisan, index) => (
          <ArtisanCard
            key={index}
            id={artisan.id}
            location={artisan.location}
            speciality={artisan.speciality}
            note={artisan.note}
          />
        ))}
      </div>
    </Container>
  );
}
