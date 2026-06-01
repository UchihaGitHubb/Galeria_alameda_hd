import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import { useLanguage } from "../context/LanguageContext";

import logoAlameda from "../assets/logos/imagen-portada.png";

export default function Splash() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <MobileContainer background="#0F8A73">
      <div className="splash-screen">
        <img src={logoAlameda} alt="Galería Alameda" />

        <button
          type="button"
          className="splash-screen__cta"
          onClick={() => navigate("/onboarding-1")}
        >
          {t.splash.start}
        </button>
      </div>
    </MobileContainer>
  );
}
