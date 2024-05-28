export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <div className="d-flex">
        <a class="navbar-brand" href="#">
          Trouve ton Paysan
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Accueil <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Artisans
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form class="form-inline my-2 my-lg-0 d-flex gap-2">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-primary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
