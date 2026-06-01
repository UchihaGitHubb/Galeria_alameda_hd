import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import AuthScreenShell from "../components/AuthScreenShell";
import { useLanguage } from "../context/LanguageContext";

export default function Login() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <AuthScreenShell>
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
            {t.auth.login.title}
          </h1>

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
              {t.auth.login.forgot}
            </button>
          </div>

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
              {t.auth.login.submit}
            </button>
          </div>

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
            <span>{t.auth.login.noAccount}</span>

            <span
              onClick={() => navigate("/register")}
              style={{
                fontWeight: "700",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {t.auth.login.register}
            </span>
          </div>
    </AuthScreenShell>
  );
}
