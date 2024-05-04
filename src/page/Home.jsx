import { Container } from "react-bootstrap";
import styles from "./styles/home.module.scss";

export default function Homepage() {
  return (
    <Container fluid>
      {/* Hero */}
      <div>
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
    </Container>
  );
}
