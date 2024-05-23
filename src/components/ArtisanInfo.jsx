import { Card } from "react-bootstrap";
import styles from "./styles/artisanInfo.module.scss";
import createStarsNote from "../functions/createStarsNote";

export function ArtisanInfo({
  name,
  description,
  note,
  speciality,
  localisation,
  image,
}) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center gap-3">
          <Card.Img className={styles["cardImg"]} src={image} />
          <Card.Title className="title px-3">{name}</Card.Title>
        </div>
        <Card.Text className="mt-3">
          <p>
            <span className={styles["cardInfo"]}>A propos:</span>{" "}
            {description ?? "azokeoazke oazk e"}
          </p>

          <p className="lh-2">
            <span className={styles["cardInfo"]}>Spécialité:</span> {speciality}
            <br />
            <span className={styles["cardInfo"]}>Localisation:</span>{" "}
            {localisation}
            <br />
            <span className={styles["cardInfo"]}>
              Note: {createStarsNote(note)}
            </span>
          </p>
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
