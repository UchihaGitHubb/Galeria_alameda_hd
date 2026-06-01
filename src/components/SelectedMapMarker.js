export default function SelectedMapMarker({ photo }) {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        background: "#D9774A",
        borderRadius: "50% 50% 50% 0",
        transform: "rotate(-45deg)",
        position: "relative",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
      }}
    >
      {/* Foto circular */}
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          overflow: "hidden",
          position: "absolute",
          top: "6px",
          left: "5px",
          transform: "rotate(45deg)",
          border: "0px solid white",
          background: "#FFFFFF",
        }}
      >
        <img
          src={photo}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
