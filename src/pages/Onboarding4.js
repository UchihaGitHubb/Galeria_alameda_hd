import { useNavigate } from "react-router-dom";

import MobileContainer from "../components/MobileContainer";
import OnboardingDots from "../components/OnboardingDots";

import { useLanguage } from "../context/LanguageContext";

export default function Onboarding4() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <MobileContainer background="#EBCF47">
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
              color: "#7299C9",
              fontSize: "58px",
              lineHeight: "0.95",
              fontWeight: "normal",
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {t.onboarding4.title}
          </h1>

          <p
            style={{
              marginTop: "28px",
              color: "#7299C9",
              fontFamily: "Quicksand",
              fontSize: "18px",
              lineHeight: "1.4",
              fontWeight: "500",
              maxWidth: "320px",
            }}
          >
            {t.onboarding4.description}
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
            active={4}
            activeColor="#7299C9"
            inactiveColor="#AABCD6"
          />

          <button
            onClick={() => navigate("/login")}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "2px solid #7299C9",
              color: "#7299C9",
              fontFamily: "Quicksand",
              fontSize: "22px",
              fontWeight: "500",
              cursor: "pointer",
              paddingBottom: "4px",
            }}
          >
            {t.onboarding4.start}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
