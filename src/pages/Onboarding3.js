import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../components/OnboardingLayout";
import OnboardingDots from "../components/OnboardingDots";
import { useLanguage } from "../context/LanguageContext";

export default function Onboarding3() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <OnboardingLayout
      background="#D4D0EB"
      footer={
        <>
          <OnboardingDots
            active={3}
            activeColor="#C56D47"
            inactiveColor="#D39A8B"
          />
          <button
            type="button"
            className="onboarding-screen__next"
            onClick={() => navigate("/onboarding-4")}
            style={{ color: "#C56D47", borderBottomColor: "#C56D47" }}
          >
            {t.onboarding3.next}
          </button>
        </>
      }
    >
      <h1 style={{ color: "#C56D47" }}>{t.onboarding3.title}</h1>
      <p style={{ color: "#C56D47" }}>{t.onboarding3.description}</p>
    </OnboardingLayout>
  );
}
