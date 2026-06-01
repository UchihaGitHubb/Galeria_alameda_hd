import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaChevronLeft } from "react-icons/fa";
import MobileContainer from "../components/MobileContainer";
import { useLanguage } from "../context/LanguageContext";

export default function Register() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "40px",
            }}
          >
            <button
              onClick={() => navigate("/login")}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "none",
                background: "#C7633F",
                color: "#F1ECE3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaChevronLeft size={18} />
            </button>

            <h1
              style={{
                fontFamily: "Quicksand",
                color: "#C7633F",
                fontSize: "32px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              {t.auth.register.title}
            </h1>
          </div>

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
              placeholder={t.auth.email}
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
              marginBottom: "16px",
            }}
          >
            <FaLock color="#F7D9CC" size={20} style={{ marginRight: "14px" }} />

            <input
              type="password"
              placeholder={t.auth.password}
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

          {/* Confirmar contraseña */}
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
              placeholder={t.auth.confirmPassword}
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

          {/* Botón Regístrate */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              onClick={() => navigate("/login")}
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
              {t.auth.register.submit}
            </button>
          </div>

          {/* Login */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              marginTop: "16px",
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "15px",
            }}
          >
            <span>{t.auth.register.hasAccount}</span>

            <span
              onClick={() => navigate("/login")}
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {t.auth.register.login}
            </span>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
