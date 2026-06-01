export default function MapMarker({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "20px",
        height: "20px",
        background: "#D9774A",
        borderRadius: "50% 50% 50% 0",
        transform: "rotate(-45deg)",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          background: "#F1ECE3",
          borderRadius: "50%",
          position: "absolute",
          top: "6px",
          left: "6px",
        }}
      />
    </div>
  );
}
