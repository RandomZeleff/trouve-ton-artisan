import { Image, ListGroup } from "react-bootstrap";
import createStarsNote from "../functions/createStarsNote";
import { Link } from "react-router-dom";

export default function SearchResult({ result }) {
  return (
    <ListGroup.Item>
      <Link className="d-flex gap-3">
        {/* Image de l'artisan */}
        <div>
          <Image
            src={result.image}
            alt={`Photo de ${result.name}`}
            style={{
              maxWidth: "50px",
              height: "50px",
              objectFit: "cover",
            }}
            className="rounded-1"
          />
        </div>

        {/* Informations de l'artisan */}
        <div>
          <h4 className="h6 title">{result.name}</h4>
          <p className="text-xs">
            <span style={{ fontWeight: "bold" }}>Spécialité:</span>{" "}
            {result.speciality}
            <br />
            <span style={{ fontWeight: "bold" }}>Localisation:</span>{" "}
            {result.localisation}
            <br />
            <span style={{ fontWeight: "bold" }}>Note:</span>{" "}
            {createStarsNote(result.note)}
          </p>
        </div>
      </Link>
    </ListGroup.Item>
  );
}
