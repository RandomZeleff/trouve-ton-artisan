import "./styles/contactForm.scss";

export default function ContactForm() {
  return (
    <form>
      <div className="form-row mb-3">
        <div className="form-group col-md-6 mb-3 w-100">
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Nom"
          />
        </div>
        <div className="form-group col-md-6 w-100">
          <input
            type="text"
            className="form-control"
            id="objet"
            placeholder="Objet"
          />
        </div>
      </div>
      <div className="form-group">
        <textarea className="form-control" id="message" placeholder="Message" />
      </div>
      <button type="submit" className="btn btn-primary mt-3 px-4 py-2">
        Envoyer
      </button>
    </form>
  );
}
