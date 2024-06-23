export default function Footer() {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/legals" className="nav-link px-2 text-body-secondary">
            Mentions légales
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/personal-data"
            className="nav-link px-2 text-body-secondary"
          >
            Données personnelles
          </a>
        </li>
        <li className="nav-item">
          <a
            href="/accessibility"
            className="nav-link px-2 text-body-secondary"
          >
            Accessibilité
          </a>
        </li>
        <li className="nav-item">
          <a href="/cookies" className="nav-link px-2 text-body-secondary">
            Cookies
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        101 cours Charlemagne, CS 20033, 69269 LYON CEDEX 02, France, +33 (0)4
        26 73 40 00
      </p>
    </footer>
  );
}
