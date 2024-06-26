import { Container } from "react-bootstrap";
import { ArtisanInfo } from "../components/ArtisanInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import artisans from "../data/artisans.json";
import ContactForm from "../components/ContactForm";

export function ArtisanPage() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const artisan = artisans.find((artisan) => artisan.id == id);
    if (!artisan) throw Error(`Aucun artisan trouvé avec l'id ${id}.`);

    setArtisan(artisan);
    setLoading(false);
  }, [id]);

  return loading ? (
    <p>Chargement en cours..</p>
  ) : (
    <Container>
      <h1 className="title my-3">Description de l'artisan</h1>

      <ArtisanInfo
        name={artisan.name}
        speciality={artisan.speciality}
        description={artisan.about}
        note={artisan.note}
        location={artisan.location}
        image={artisan.image}
      />

      <div
        className="mt-3 p-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="title">Prendre contact</h2>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
