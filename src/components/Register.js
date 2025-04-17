import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"; // pour les styles .gradient-custom-3 et .gradient-custom-4

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();


    // Enregistre les données
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Inscription réussie !");
    navigate("/login");
  };

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Créer un compte
                  </h2>

                  <form onSubmit={handleRegister}>
                    

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="formEmail"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label className="form-label" htmlFor="formEmail">
                        Votre email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="formPassword"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label className="form-label" htmlFor="formPassword">
                        Mot de passe
                      </label>
                    </div>

                  

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                        S'inscrire
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Déjà inscrit ?{" "}
                      <a href="/login" className="fw-bold text-body">
                        <u>Se connecter</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
