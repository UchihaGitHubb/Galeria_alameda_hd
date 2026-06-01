import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import MobileContainer from "../components/MobileContainer";
import { useLanguage } from "../context/LanguageContext";

export default function PasswordUpdated() {
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Check */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#C7633F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "30px",
            }}
          >
            <Check size={40} strokeWidth={5} color="#F1ECE3" />
          </div>

          {/* Título */}
          <h1
            style={{
              margin: 0,
              marginBottom: "20px",
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "34px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            {t.auth.passwordUpdated.title}
          </h1>

          <p
            style={{
              margin: 0,
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "18px",
              lineHeight: "1.45",
              textAlign: "center",
              maxWidth: "320px",
            }}
          >
            {t.auth.passwordUpdated.description}
          </p>

          {/* Espaciador */}

          {/* Botón */}
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            {t.auth.passwordUpdated.submit}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
