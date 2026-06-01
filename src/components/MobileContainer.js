import { useTheme } from "../context/ThemeContext";

export default function MobileContainer({ children, background }) {
  const { darkMode } = useTheme();

  return (
    <div
      style={{
        height: "100dvh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        background: darkMode ? "#111111" : "#E5E5E5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          height: "100%",
          overflow: "hidden",
          background: background || (darkMode ? "#1B1B1B" : "#F1ECE3"),
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}
