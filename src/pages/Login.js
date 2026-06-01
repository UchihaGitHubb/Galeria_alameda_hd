import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import MobileContainer from "../components/MobileContainer";

export default function Login() {
  const navigate = useNavigate();

  return (
    <MobileContainer background="#C7633F">
      <div
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "65%",
            background: "#F1ECE3",
            borderTopLeftRadius: "48px",
            borderTopRightRadius: "48px",
            padding: "48px 32px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontFamily: "Quicksand",
              color: "#C7633F",
              fontSize: "32px",
              fontWeight: "700",
              margin: 0,
              marginBottom: "40px",
            }}
          >
            Inicia sesión
          </h1>

          {/* Correo */}
          <div
            style={{
              background: "#E0AE99",
              borderRadius: "40px",
              height: "54px",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              marginBottom: "16px",
            }}
          >
            <FaEnvelope
              color="#F7D9CC"
              size={20}
              style={{ marginRight: "14px" }}
            />

            <input
              type="email"
              placeholder="Correo"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "Quicksand",
                fontSize: "22px",
                fontWeight: "500",
                color: "#F7D9CC",
              }}
            />
          </div>

          {/* Contraseña */}
          <div
            style={{
              background: "#E0AE99",
              borderRadius: "40px",
              height: "54px",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <FaLock color="#F7D9CC" size={20} style={{ marginRight: "14px" }} />

            <input
              type="password"
              placeholder="Contraseña"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "Quicksand",
                fontSize: "22px",
                fontWeight: "500",
                color: "#F7D9CC",
              }}
            />
          </div>

          {/* Olvidaste contraseña */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "14px",
            }}
          >
            <button
              onClick={() => navigate("/forgot-password")}
              style={{
                border: "none",
                background: "transparent",
                color: "#C7633F",
                fontFamily: "Quicksand",
                fontSize: "14px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              ¿Olvidaste la contraseña?
            </button>
          </div>

          {/* Botón Inicia */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button
              onClick={() => navigate("/create-profile-name")}
              style={{
                width: "250px",
                height: "54px",
                borderRadius: "40px",
                border: "none",
                background: "#C7633F",
                color: "#FFFFFF",
                fontFamily: "Quicksand",
                fontSize: "22px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Inicia
            </button>
          </div>

          {/* Registro */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              marginTop: "22px",
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "15px",
            }}
          >
            <span>¿No tienes una cuenta?</span>

            <span
              onClick={() => navigate("/register")}
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Regístrate ahora
            </span>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
