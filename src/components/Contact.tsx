import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import MagneticButton from "@/components/MagneticButton";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const body = encodeURIComponent(
      `${t("contact.mailFrom", { name, email })}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject || t("contact.defaultSubject"))}&body=${body}`;
  };

  return (
    <section
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      id="contact"
    >
      <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")}>
        {t("contact.subtitle")}
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a
            className="glass flex items-center gap-4 rounded-3xl p-5"
            href={`mailto:${site.email}`}
          >
            <EnvelopeSimple
              className="text-cyan-300"
              size={24}
              weight="duotone"
            />
            <div>
              <p className="text-xs tracking-widest text-white/45 uppercase">
                {t("contact.email")}
              </p>
              <p>{site.email}</p>
            </div>
          </a>
          <a
            className="glass flex items-center gap-4 rounded-3xl p-5"
            href={site.phoneHref}
          >
            <Phone className="text-fuchsia-300" size={24} weight="duotone" />
            <div>
              <p className="text-xs tracking-widest text-white/45 uppercase">
                {t("contact.phone")}
              </p>
              <p>{site.phone}</p>
            </div>
          </a>
          <div className="glass flex items-center gap-4 rounded-3xl p-5">
            <MapPin className="text-violet-300" size={24} weight="duotone" />
            <div>
              <p className="text-xs tracking-widest text-white/45 uppercase">
                {t("contact.location")}
              </p>
              <p>{site.location}</p>
            </div>
          </div>
        </div>

        <form
          className="glass grid gap-4 rounded-[1.6rem] p-6"
          onSubmit={onSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              {t("contact.name")}
              <input
                required
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm">
              {t("contact.email")}
              <input
                required
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            {t("contact.subject")}
            <input
              required
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm">
            {t("contact.message")}
            <textarea
              required
              className="min-h-32 resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-300/50"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <MagneticButton className="mt-2" type="submit">
            {t("contact.send")}
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}
