import { Card } from "react-bootstrap";
import styles from "./styles/artisanCard.module.scss";
import createStarsNote from "../functions/createStarsNote";

export default function ArtisanCard({
  name,
  image,
  speciality,
  localisation,
  note,
}) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center gap-3">
          <Card.Img className={styles["cardImg"]} src={image} />
          <Card.Title className="title">{name}</Card.Title>
        </div>
        <Card.Text>
          <span className={styles["cardInfo"]}>Spécialité:</span> {speciality}
          <br />
          <span className={styles["cardInfo"]}>Localisation:</span>{" "}
          {localisation}
          <br />
          <span className={styles["cardInfo"]}>
            Note: {createStarsNote(note)}
          </span>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
