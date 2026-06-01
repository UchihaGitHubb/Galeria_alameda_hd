import { useNavigate } from "react-router-dom";

import OnboardingLayout from "../components/OnboardingLayout";
import OnboardingDots from "../components/OnboardingDots";
import { useLanguage } from "../context/LanguageContext";

export default function Onboarding2() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <OnboardingLayout
      background="#CFD060"
      footer={
        <>
          <OnboardingDots
            active={2}
            activeColor="#008B8B"
            inactiveColor="#6FA8A8"
          />
          <button
            type="button"
            className="onboarding-screen__next"
            onClick={() => navigate("/onboarding-3")}
            style={{ color: "#008B8B", borderBottomColor: "#008B8B" }}
          >
            {t.onboarding2.next}
          </button>
        </>
      }
    >
      <h1 style={{ color: "#008B8B" }}>{t.onboarding2.title}</h1>
      <p style={{ color: "#008B8B" }}>{t.onboarding2.description}</p>
    </OnboardingLayout>
  );
}
