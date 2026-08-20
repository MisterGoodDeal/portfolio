import { useTranslation } from "react-i18next";

import { languages } from "@/i18n";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language).slice(0, 2);

  return (
    <div
      aria-label={t("lang.switchTo")}
      className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 text-xs font-semibold tracking-wide"
      role="group"
    >
      {languages.map((lng) => {
        const active = current === lng;

        return (
          <button
            key={lng}
            className={`px-2.5 py-1.5 transition-colors ${
              active
                ? "bg-white/15 text-white"
                : "text-white/50 hover:text-white"
            }`}
            disabled={active}
            type="button"
            onClick={() => {
              void i18n.changeLanguage(lng);
            }}
          >
            {t(`lang.${lng}`)}
          </button>
        );
      })}
    </div>
  );
}
