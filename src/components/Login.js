import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === "admin@site.com" && password === "admin123") {
      login(email, password); // Cela va automatiquement mettre le rôle admin
      navigate("/admin");
    } else if (email === savedEmail && password === savedPassword) {
      const role = localStorage.getItem("userRole") || "user";
      login(email, password); // Dans le contexte, le rôle sera toujours "user" pour les inscrits
      navigate("/dashboard");
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

          <h2 className="text-uppercase text-center mb-5">
                    Se Connecter
                  </h2>
            <form onSubmit={handleLogin}>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form1Example13">
                  Adresse email
                </label>
              </div>

              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="form-label" htmlFor="form1Example23">
                  Mot de passe
                </label>
              </div>

              {/* Checkbox + lien */}
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Se souvenir de moi
                  </label>
                </div>
                <a href="#!">Mot de passe oublié ?</a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block w-100 mb-3"
              >
                Se connecter
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OU</p>
              </div>

              <div className="row">
  <div className="col-6">
    <a
      className="btn btn-primary btn-lg w-100 mb-2"
      style={{ backgroundColor: "#3b5998" }}
      href="#!"
      role="button"
    >
      <i className="fab fa-facebook-f me-2"></i>Facebook
    </a>
  </div>
  <div className="col-6">
    <a
      className="btn btn-light btn-lg w-100 mb-2"
      style={{ border: "1px solid #ccc" }}
      href="#!"
      role="button"
    >
      <img
        src="https://img.icons8.com/color/16/000000/google-logo.png"
        alt="Google logo"
        className="me-2"
      />
      Google
    </a>
  </div>
</div>
<p className="text-center text-muted mt-5 mb-0">
                      
Vous n'avez pas de compte ? ?{" "}
                      <a href="/register" className="fw-bold text-body">
                        <u>S'inscrire</u>
                      </a>
                    </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
