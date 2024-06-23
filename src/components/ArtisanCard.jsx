import { Card } from "react-bootstrap";
import styles from "./styles/artisanCard.module.scss";
import createStarsNote from "../functions/createStarsNote";
import { Link } from "react-router-dom";

export default function ArtisanCard({ name, id, speciality, location, note }) {
  return (
    <Link to={`/artisans/${id}`}>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-center gap-3">
            <Card.Img
              className={styles["cardImg"]}
              src={"/img/fabrice.jpg"}
              alt={`Image de ${name}`}
            />
            <Card.Title className="title">{name}</Card.Title>
          </div>
          <Card.Text>
            <span className={styles["cardInfo"]}>Spécialité:</span> {speciality}
            <br />
            <span className={styles["cardInfo"]}>Localisation:</span> {location}
            <br />
            <span className={styles["cardInfo"]}>
              Note: {createStarsNote(Number(Math.round(note)))}
            </span>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Link>
  );
}
