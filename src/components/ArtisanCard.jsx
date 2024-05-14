import { Card } from "react-bootstrap";
import styles from "./styles/artisanCard.module.scss";

export function ArtisanCard({ name, image, speciality, localisation, note }) {
  const starFull = <i class="fa-solid fa-star" />;
  const starEmpty = <i class="fa-regular fa-star" />;

  const createNote = (length) => {
    const fullStarLength = length;
    const emptyStarLength = Math.abs(length - 5);

    return [
      ...new Array(fullStarLength).fill(starFull),
      ...new Array(emptyStarLength).fill(starEmpty),
    ];
  };

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
          <span className={styles["cardInfo"]}>Note: {createNote(note)}</span>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
