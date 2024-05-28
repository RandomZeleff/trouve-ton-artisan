import artisans from "../data/artisans.json";
import { ArtisanCard } from "../components/ArtisanCard";
import Step from "../components/Step";

const steps = [
  "1. Choisir la catégorie d’artisanat dans le menu.",
  "2. Choisir un artisan.",
  "3. Le contacter via le formulaire de contact.",
  "4. Une réponse sera apportée sous 48h.",
];

export default function Homepage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-5">
        <h1 className="title">Comment trouver mon artisan ?</h1>
        <div className="d-flex flex-column gap-3">
          {steps.map((step) => (
            <Step text={step} />
          ))}
        </div>
      </div>

      {/* Artisans du mois */}
      <div>
        <h2 className="title">Les artisans du mois</h2>
        <div className="d-flex flex-wrap gap-3">
          {artisans.map((artisan) => (
            <div className="col-12 col-lg-5">
              <ArtisanCard
                name={artisan.name}
                image={artisan.image}
                localisation={artisan.localisation}
                speciality={artisan.speciality}
                note={artisan.note}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
