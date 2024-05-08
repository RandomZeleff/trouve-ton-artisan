import { Card, Container } from "react-bootstrap";
import styles from "./styles/home.module.scss";

const artisans = [
  {
    name: "Robert Silbort",
    speciality: "Sculpteur",
    localisation: "Annecy",
    image: "./img/fabrice.jpg",
    note: 2,
  },
];
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

      {/* Artisans du mois */}
      <div>
        <h2 className="title">Les artisans du mois</h2>
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

const ArtisanCard = ({ name, image, speciality, localisation, note }) => {
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
};
