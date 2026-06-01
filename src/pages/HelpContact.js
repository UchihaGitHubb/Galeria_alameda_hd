import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

import HelpPageLayout from "../components/HelpPageLayout";
import { useLanguage } from "../context/LanguageContext";
import { CONTACT } from "../data/contactInfo";

export default function HelpContact() {
  const { t } = useLanguage();

  const channels = [
    {
      icon: MessageCircle,
      title: t.help.contact.whatsapp,
      desc: t.help.contact.whatsappDesc,
      action: () =>
        window.open(`https://wa.me/${CONTACT.whatsapp.phone}`, "_blank"),
    },
    {
      icon: Phone,
      title: t.help.contact.phone,
      desc: t.help.contact.phoneDesc,
      action: () => {
        window.location.href = `tel:${CONTACT.phone.tel}`;
      },
    },
    {
      icon: Mail,
      title: t.help.contact.email,
      desc: t.help.contact.emailDesc,
      action: () => {
        window.location.href = `mailto:${CONTACT.email.address}`;
      },
    },
  ];

  return (
    <HelpPageLayout
      title={t.help.contact.title}
      intro={t.help.contact.intro}
      centeredTitle
    >
      <div className="help-contact-list">
        {channels.map((channel) => (
          <button
            key={channel.title}
            type="button"
            className="help-contact-card"
            onClick={channel.action}
          >
            <span className="help-contact-card__icon">
              <channel.icon size={22} strokeWidth={2.2} />
            </span>
            <span>
              <h3>{channel.title}</h3>
              <p>{channel.desc}</p>
            </span>
          </button>
        ))}
      </div>

      <div className="help-hours-card">
        <h3 className="help-hours-card__title">{t.help.contact.hoursTitle}</h3>
        <div className="help-hours-card__row">
          <span className="help-hours-card__icon">
            <Clock size={24} strokeWidth={2.2} />
          </span>
          <div className="help-hours-card__body">
            <p>{t.help.contact.hoursWeekday}</p>
            <p>{t.help.contact.hoursWeekend}</p>
          </div>
        </div>
      </div>
    </HelpPageLayout>
  );
}
