import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../components/OnboardingLayout";
import OnboardingDots from "../components/OnboardingDots";
import { useLanguage } from "../context/LanguageContext";

export default function Onboarding1() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <OnboardingLayout
      background="#EAB4B4"
      footer={
        <>
          <OnboardingDots
            active={1}
            activeColor="#C56D47"
            inactiveColor="#D39A8B"
          />
          <button
            type="button"
            className="onboarding-screen__next"
            onClick={() => navigate("/onboarding-2")}
            style={{ color: "#C56D47", borderBottomColor: "#C56D47" }}
          >
            {t.onboarding1.next}
          </button>
        </>
      }
    >
      <h1 style={{ color: "#C56D47" }}>{t.onboarding1.title}</h1>
      <p style={{ color: "#C56D47" }}>{t.onboarding1.description}</p>
    </OnboardingLayout>
  );
}
