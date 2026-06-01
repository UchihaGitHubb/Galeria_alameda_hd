import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import AuthScreenShell from "../components/AuthScreenShell";
import { useLanguage } from "../context/LanguageContext";

export default function NewPassword() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <AuthScreenShell>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            <button
              onClick={() => navigate("/check-email")}
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "none",
                background: "#C7633F",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <FaArrowLeft size={24} />
            </button>

            <h1
              style={{
                margin: 0,
                color: "#C7633F",
                fontFamily: "Quicksand",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "1.15",
                whiteSpace: "pre-line",
              }}
            >
              {t.auth.newPassword.title}
            </h1>
          </div>

          {/* Descripción */}
          <p
            style={{
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "18px",
              lineHeight: "1.35",
              marginBottom: "30px",
              maxWidth: "330px",
            }}
          >
            {t.auth.newPassword.description}
          </p>

          {/* Nueva contraseña */}
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
              placeholder={t.auth.newPassword.password}
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
              placeholder={t.auth.newPassword.confirm}
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

          {/* Botón Guardar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "22px",
            }}
          >
            <button
              onClick={() => navigate("/update-password")}
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
              {t.auth.newPassword.submit}
            </button>
          </div>
    </AuthScreenShell>
  );
}
