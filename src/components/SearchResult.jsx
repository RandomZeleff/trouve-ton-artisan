import { Image, ListGroup } from "react-bootstrap";
import createStarsNote from "../functions/createStarsNote";
import { Link } from "react-router-dom";

export default function SearchResult({ result }) {
  return (
    <ListGroup.Item>
      <Link to={`/artisans/${result.id}`}>
        <h4 className="h6 title">{result.name}</h4>
        <p className="text-xs">
          <span style={{ fontWeight: "bold" }}>Spécialité:</span>{" "}
          {result.speciality}
          <br />
          <span style={{ fontWeight: "bold" }}>Localisation:</span>{" "}
          {result.location}
          <br />
          <span style={{ fontWeight: "bold" }}>Note:</span>{" "}
          {createStarsNote(Number(Math.round(result.note)))}
        </p>
      </Link>
    </ListGroup.Item>
  );
}
