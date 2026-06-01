import MobileContainer from "./MobileContainer";

export default function AuthScreenShell({ children }) {
  return (
    <MobileContainer background="#C7633F">
      <div className="auth-screen">
        <div className="auth-screen__panel">{children}</div>
      </div>
    </MobileContainer>
  );
}
