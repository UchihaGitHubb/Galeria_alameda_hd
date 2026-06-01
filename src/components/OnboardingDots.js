import { useNavigate } from "react-router-dom";

export default function OnboardingDots({ active, activeColor, inactiveColor }) {
  const navigate = useNavigate();

  const dots = [
    { id: 1, path: "/onboarding-1" },
    { id: 2, path: "/onboarding-2" },
    { id: 3, path: "/onboarding-3" },
    { id: 4, path: "/onboarding-4" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "18px",
      }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          onClick={() => navigate(dot.path)}
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            cursor: "pointer",
            background: active === dot.id ? activeColor : inactiveColor,
          }}
        />
      ))}
    </div>
  );
}
