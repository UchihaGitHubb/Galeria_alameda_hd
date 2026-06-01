import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";

import { useLanguage } from "../context/LanguageContext";

import logoAlameda from "../assets/logos/imagen-portada.png";

export default function Splash() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <MobileContainer background="#0F8A73">
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "px",
          paddingBottom: "40px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={logoAlameda}
          alt="Galería Alameda"
          style={{
            width: "66%",
            maxWidth: "700px",
            objectFit: "contain",
          }}
        />

        <button
          onClick={() => navigate("/onboarding-1")}
          style={{
            width: "180px",
            height: "72px",
            borderRadius: "40px",
            border: "none",
            background: "#E8CB42",
            color: "#0F8A73",
            fontFamily: "Quicksand",
            fontSize: "24px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          {t.splash.start}
        </button>
      </div>
    </MobileContainer>
  );
}
