import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import MobileContainer from "../components/MobileContainer";
import { useLanguage } from "../context/LanguageContext";

export default function CreateProfileName() {
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
          }}
        >
          <h1
            style={{
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "1.2",
              margin: 0,
              marginBottom: "25px",
              whiteSpace: "pre-line",
            }}
          >
            {t.auth.createProfile.title}
          </h1>

          <p
            style={{
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "18px",
              lineHeight: "1.4",
              marginBottom: "55px",
            }}
          >
            {t.auth.createProfile.description}
          </p>

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
            <FaUser color="#F7D9CC" size={20} style={{ marginRight: "14px" }} />

            <input
              type="text"
              placeholder={t.auth.createProfile.namePlaceholder}
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
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              onClick={() => navigate("/home")}
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
              {t.auth.createProfile.submit}
            </button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
