import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import OnboardingDots from "../components/OnboardingDots";

import { useLanguage } from "../context/LanguageContext";

export default function Onboarding1() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <MobileContainer background="#EAB4B4">
      <div
        style={{
          height: "100vh",
          position: "relative",
          padding: "0 32px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            marginTop: "170px",
          }}
        >
          <h1
            style={{
              fontFamily: "DistressedSherlock",
              color: "#C56D47",
              fontSize: "58px",
              lineHeight: "0.95",
              fontWeight: "normal",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {t.onboarding1.title}
          </h1>

          <p
            style={{
              marginTop: "28px",
              color: "#C56D47",
              fontFamily: "Quicksand",
              fontSize: "18px",
              lineHeight: "1.4",
              fontWeight: "500",
              maxWidth: "280px",
              whiteSpace: "pre-line",
            }}
          >
            {t.onboarding1.description}
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            left: "32px",
            right: "32px",
            bottom: "55px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <OnboardingDots
            active={1}
            activeColor="#C56D47"
            inactiveColor="#D39A8B"
          />

          <button
            onClick={() => navigate("/onboarding-2")}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "2px solid #C56D47",
              color: "#C56D47",
              fontFamily: "Quicksand",
              fontSize: "22px",
              fontWeight: "500",
              cursor: "pointer",
              paddingBottom: "4px",
            }}
          >
            {t.onboarding1.next}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
