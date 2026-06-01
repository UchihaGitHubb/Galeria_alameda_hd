import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEnvelope, FaRedo } from "react-icons/fa";
import MobileContainer from "../components/MobileContainer";
import { useLanguage } from "../context/LanguageContext";

export default function CheckEmail() {
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <button
              onClick={() => navigate("/forgot-password")}
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "none",
                background: "#C7633F",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaArrowLeft size={24} />
            </button>

            <h1
              style={{
                margin: 0,
                color: "#C7633F",
                fontFamily: "Quicksand",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              {t.auth.checkEmail.title}
            </h1>
          </div>

          <p
            style={{
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "18px",
              lineHeight: "1.35",
              marginBottom: "50px",
            }}
          >
            {t.auth.checkEmail.description}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "22px",
            }}
          >
            <button
              onClick={() => navigate("/new-password")}
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
                gap: "12px",
              }}
            >
              <FaRedo size={20} />
              {t.auth.checkEmail.resend}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => navigate("/forgot-password")}
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
                gap: "12px",
              }}
            >
              <FaEnvelope size={20} />
              {t.auth.checkEmail.changeEmail}
            </button>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "14px",
              lineHeight: "1.4",
            }}
          >
            {t.auth.checkEmail.spamNote}
            <br />
            {t.auth.checkEmail.spamNoteLine2}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
