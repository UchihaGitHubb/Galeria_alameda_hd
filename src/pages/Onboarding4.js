import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../components/OnboardingLayout";
import OnboardingDots from "../components/OnboardingDots";
import { useLanguage } from "../context/LanguageContext";

export default function Onboarding4() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <OnboardingLayout
      background="#EBCF47"
      footer={
        <>
          <OnboardingDots
            active={4}
            activeColor="#7299C9"
            inactiveColor="#AABCD6"
          />
          <button
            type="button"
            className="onboarding-screen__next"
            onClick={() => navigate("/login")}
            style={{ color: "#7299C9", borderBottomColor: "#7299C9" }}
          >
            {t.onboarding4.start}
          </button>
        </>
      }
    >
      <h1 style={{ color: "#7299C9" }}>{t.onboarding4.title}</h1>
      <p style={{ color: "#7299C9" }}>{t.onboarding4.description}</p>
    </OnboardingLayout>
  );
}
