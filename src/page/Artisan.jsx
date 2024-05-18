import { Container } from "react-bootstrap";
import { ArtisanInfo } from "../components/ArtisanInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import artisans from "../data/artisans.json";

export function ArtisanPage() {
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const artisan = artisans[id];
    if (!artisan) throw Error(`Aucun artisan trouvé avec l'id ${id}.`);

    setArtisan(artisan);
    setLoading(false);
  }, []);

  return loading ? (
    <p>Chargement en cours..</p>
  ) : (
    <Container>
      <h1 className="title text-center my-">Description de l'artisan</h1>

      <ArtisanInfo
        name={artisan.name}
        speciality={artisan.speciality}
        note={artisan.note}
        localisation={artisan.localisation}
      />
    </Container>
  );
}
