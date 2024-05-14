import { Container } from "react-bootstrap";
import styles from "./styles/home.module.scss";
import artisans from "../data/artisans.json";
import { ArtisanCard } from "../components/ArtisanCard";

export default function Homepage() {
  return (
    <Container fluid>
      {/* Hero */}
      <div className="mb-5">
        <h1 className="title">Comment trouver mon artisan ?</h1>
        <div className="d-flex flex-column gap-3">
          <div className="w-100 border rounded-1 p-2">
            <p className={`${styles["stepDescription"]} m-2`}>
              1. Choisir la catégorie d’artisanat dans le menu.
            </p>
          </div>
          <div className="w-100 border rounded-1 p-2">
            <p className={`${styles["stepDescription"]} m-2`}>
              2. Choisir un artisan.
            </p>
          </div>
          <div className="w-100 border rounded-1 p-2">
            <p className={`${styles["stepDescription"]} m-2`}>
              3. Le contacter via le formulaire de contact.
            </p>
          </div>
          <div className="w-100 border rounded-1 p-2">
            <p className={`${styles["stepDescription"]} m-2`}>
              4. Une réponse sera apportée sous 48h.
            </p>
          </div>
        </div>
      </div>

      {/* Artisans du mois */}
      <div>
        <h2 className="title">Les artisans du mois</h2>
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
      </div>
    </Container>
  );
}
