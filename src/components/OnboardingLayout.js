import MobileContainer from "./MobileContainer";

export default function OnboardingLayout({ background, children, footer }) {
  return (
    <MobileContainer background={background}>
      <div className="onboarding-screen">
        <div className="onboarding-screen__content">{children}</div>
        <div className="onboarding-screen__footer">{footer}</div>
      </div>
    </MobileContainer>
  );
}
