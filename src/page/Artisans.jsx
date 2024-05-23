import { Container } from "react-bootstrap";
import artisans from "../data/artisans.json";
import { ArtisanCard } from "../components/ArtisanCard";

export function ArtisansPage() {
  return (
    <Container>
      <h1 className="title my-3">Liste des artisans</h1>

      <div className="d-flex flex-column gap-3">
        {artisans.map((artisan) => (
          <ArtisanCard
            name={artisan.name}
            image={artisan.image}
            localisation={artisan.localisation}
            speciality={artisan.speciality}
            note={artisan.note}
          />
        ))}
      </div>
    </Container>
  );
}
