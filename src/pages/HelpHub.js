import { useNavigate, useLocation } from "react-router-dom";
import {
  MessageCircle,
  Mail,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
} from "lucide-react";

import HelpPageLayout from "../components/HelpPageLayout";
import { useLanguage } from "../context/LanguageContext";

export default function HelpHub() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const backTo = location.state?.from || "/home";

  const items = [
    {
      icon: HelpCircle,
      title: t.help.hub.faq,
      desc: t.help.hub.faqDesc,
      path: "/help/faq",
    },
    {
      icon: MessageCircle,
      title: t.help.hub.contact,
      desc: t.help.hub.contactDesc,
      path: "/help/contact",
    },
    {
      icon: AlertTriangle,
      title: t.help.hub.report,
      desc: t.help.hub.reportDesc,
      path: "/help/report",
    },
    {
      icon: Lightbulb,
      title: t.help.hub.suggestion,
      desc: t.help.hub.suggestionDesc,
      path: "/help/suggestion",
    },
  ];

  return (
    <HelpPageLayout
      title={t.help.hub.title}
      intro={t.help.hub.intro}
      backTo={backTo}
      centeredTitle
    >
      <div className="help-hub-list">
        {items.map((item) => (
          <button
            key={item.path}
            type="button"
            className="help-hub-card"
            onClick={() => navigate(item.path)}
          >
            <span className="help-hub-card__icon">
              <item.icon size={22} strokeWidth={2.2} />
            </span>
            <span>
              <p className="help-hub-card__title">{item.title}</p>
              <p className="help-hub-card__desc">{item.desc}</p>
            </span>
          </button>
        ))}
      </div>
    </HelpPageLayout>
  );
}
