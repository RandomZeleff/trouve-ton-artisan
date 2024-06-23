import { Card } from "react-bootstrap";
import styles from "./styles/artisanInfo.module.scss";
import createStarsNote from "../functions/createStarsNote";

export function ArtisanInfo({ name, description, note, speciality, location }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center gap-3">
          <Card.Title className="title">{name}</Card.Title>
        </div>
        <Card.Text className="mt-3">
          <span className={styles["cardInfo"]}>A propos:</span>{" "}
          {description ?? "Aucune description."}
        </Card.Text>

        <Card.Text className="lh-2">
          <span className={styles["cardInfo"]}>Spécialité:</span> {speciality}
          <br />
          <span className={styles["cardInfo"]}>Localisation:</span> {location}
          <br />
          <span className={styles["cardInfo"]}>
            Note: {createStarsNote(Number(Math.round(note)))}
          </span>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <div className="text-end">
          <a href="/" target="_blank">
            <img src="../img/web.png" />
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
}
