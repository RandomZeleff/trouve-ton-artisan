export default function Footer() {
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="/legals" class="nav-link px-2 text-body-secondary">
            Mentions légales
          </a>
        </li>
        <li class="nav-item">
          <a href="/personal-data" class="nav-link px-2 text-body-secondary">
            Données personnelles
          </a>
        </li>
        <li class="nav-item">
          <a href="/accessibility" class="nav-link px-2 text-body-secondary">
            Accessibilité
          </a>
        </li>
        <li class="nav-item">
          <a href="/cookies" class="nav-link px-2 text-body-secondary">
            Cookies
          </a>
        </li>
      </ul>
      <p class="text-center text-body-secondary">
        101 cours Charlemagne, CS 20033, 69269 LYON CEDEX 02, France, +33 (0)4
        26 73 40 00
      </p>
    </footer>
  );
}
