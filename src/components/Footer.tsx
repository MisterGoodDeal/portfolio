import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import { site } from "@/data/site";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 sm:flex-row">
      <p className="text-sm text-white/45">
        {t("footer.copyright", {
          year: new Date().getFullYear(),
          name: site.name,
        })}
      </p>
      <div className="flex items-center gap-4 text-white/60">
        <a
          aria-label="GitHub"
          className="hover:text-white"
          href={site.github}
          rel="noreferrer"
          target="_blank"
        >
          <GithubLogo size={22} weight="duotone" />
        </a>
        <a
          aria-label="LinkedIn"
          className="hover:text-white"
          href={site.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          <LinkedinLogo size={22} weight="duotone" />
        </a>
      </div>
    </footer>
  );
}
