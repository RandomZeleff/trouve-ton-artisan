import emailjs from "emailjs-com";
import "./styles/contactForm.scss";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Permet d'envoyer un mail.
   * @param {string} to - Destinataire.
   * @param {string} from - Expéditeur.
   * @param {string} subject - Objet du mail.
   * @param {string} message - Message.
   * @returns {Promise<void>}
   */
  const sendMail = async (to, from, subject, message) => {
    const templateParams = {
      to_name: to,
      from_name: from,
      subject,
      message,
    };

    return emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICE,
      process.env.REACT_APP_EMAIL_TEMPLATE,
      templateParams,
      process.env.REACT_APP_EMAIL_USER
    );
  };

  /**
   * Permet de vérifier que tous les champs du formulaire sont bien remplis.
   * @returns {string}
   */
  const inputNotEmpty = () => {
    if (!name.trim().length) return "Veuillez renseigner votre nom.";
    else if (!subject.trim().length)
      return "Veuillez renseigner l'objet du message.";
    else if (!message.trim().length) return "Veuillez indiquer un message.";
    else return "";
  };

  /**
   * Permet de supprimer tous les champs du formulaire.
   */
  const clearInput = () => {
    setName("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    // Evite que la page dse recharge.
    e.preventDefault();

    // Vérifie que les champs ne sont pas vide.
    const inputError = inputNotEmpty();
    if (inputError) {
      setSuccessMessage("");
      setErrorMessage(inputError);
      return;
    }

    try {
      // Envoi de l'email.
      sendMail(process.env.REACT_APP_CONTACT_EMAIL, name, subject, message);

      // Supprime les valeurs des champs.
      clearInput();

      // Affiche un message de succès.
      setSuccessMessage("Votre message a bien été envoyé !");
    } catch (err) {
      console.error("Impossible d'envoyer le mail. ", err);
      setSuccessMessage("");
      setErrorMessage("Une erreur est survenue..");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row mb-3">
        <div className="form-group col-md-6 mb-3 w-100">
          <input
            type="text"
            className="form-control"
            id="nom"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6 w-100">
          <input
            type="text"
            className="form-control"
            id="objet"
            placeholder="Objet"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="text-center mb-2">
        <button type="submit" className="btn btn-primary mt-3 px-4 py-2">
          Envoyer
        </button>
      </div>

      <p
        className="text-center"
        style={{
          display: `${successMessage || errorMessage ? "block" : "none"}`,
          color: `${successMessage ? "green" : "red"}`,
        }}
      >
        {successMessage || errorMessage || ""}
      </p>
    </form>
  );
}
