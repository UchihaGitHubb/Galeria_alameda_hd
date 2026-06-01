import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaChevronLeft } from "react-icons/fa";
import MobileContainer from "../components/MobileContainer";

export default function ForgotPassword() {
  const navigate = useNavigate();

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
          {/* Encabezado */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <button
              onClick={() => navigate("/login")}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: "none",
                background: "#C7633F",
                color: "#F1ECE3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                marginTop: "8px",
              }}
            >
              <FaChevronLeft size={18} />
            </button>

            <h1
              style={{
                //marginTop: 0,//
                //margin: 30,//
                color: "#C7633F",
                fontFamily: "Quicksand",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "1.15",
                textAlign: "",

                flex: 1,
              }}
            >
              ¿Olvidaste tu
              <br />
              contraseña?
            </h1>
          </div>

          {/* Descripción */}
          <p
            style={{
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "16px",
              lineHeight: "1.3",
              marginBottom: "55px",
            }}
          >
            No te preocupes. Ingresa el correo electrónico asociado a tu cuenta
            y te enviaremos un enlace para recuperar tu contraseña.
          </p>

          {/* Campo correo */}
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
            <FaEnvelope
              color="#F7D9CC"
              size={20}
              style={{ marginRight: "14px" }}
            />

            <input
              type="email"
              placeholder="Correo"
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

          {/* Botón */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button
              onClick={() => navigate("/check-email")}
              style={{
                width: "260px",
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
              Enviar enlace
            </button>
          </div>

          {/* Nota */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#C7633F",
              fontFamily: "Quicksand",
              fontSize: "14px",
              lineHeight: "1.25",
            }}
          >
            Recuerda revisar tu bandeja de spam
            <br />o correo no deseado.
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
