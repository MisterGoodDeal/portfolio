import { ArrowDown, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import MagneticButton from "@/components/MagneticButton";
import { site } from "@/data/site";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [i18n.language]);

  useEffect(() => {
    const list = t("hero.roles", { returnObjects: true });
    const full = list[index] ?? "";
    const delay = deleting ? 38 : 72;
    const pause = full === text && !deleting ? 1800 : 0;

    const id = window.setTimeout(() => {
      if (pause) {
        setDeleting(true);

        return;
      }

      if (!deleting) {
        setText(full.slice(0, text.length + 1));

        return;
      }

      if (text.length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % list.length);

        return;
      }

      setText(full.slice(0, text.length - 1));
    }, pause || delay);

    return () => window.clearTimeout(id);
  }, [deleting, index, t, text]);

  return (
    <section
      className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24 pb-16"
      id="home"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-cyan-300 uppercase">
            {t("hero.hello")}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] font-extrabold sm:text-7xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-5 min-h-[2rem] font-mono text-lg text-white/80">
            {text}
            <span className="ml-0.5 inline-block animate-pulse text-fuchsia-300">
              _
            </span>
          </p>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
            {t("hero.headline")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="#contact">{t("hero.contact")}</MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              {t("hero.projects")}
            </MagneticButton>
          </div>
          <div className="mt-8 flex items-center gap-4 text-white/70">
            <a
              aria-label="GitHub"
              className="transition-colors hover:text-white"
              href={site.github}
              rel="noreferrer"
              target="_blank"
            >
              <GithubLogo size={26} weight="duotone" />
            </a>
            <a
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
              href={site.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedinLogo size={26} weight="duotone" />
            </a>
            <span className="text-sm text-white/45">{site.location}</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative mx-auto w-full max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-8 rounded-full bg-violet-500/40 blur-3xl" />
          <div className="pulse-ring absolute inset-0 rounded-full border border-cyan-300/20" />
          <div className="absolute inset-6 rounded-full border border-fuchsia-300/15" />
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              alt={t("hero.photoAlt", { name: site.name })}
              className="relative z-10 w-full float-y mix-blend-lighten select-none"
              src="/mac.png"
            />
          </div>
        </motion.div>
      </div>

      <a
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-widest text-white/45 uppercase sm:flex"
        href="#about"
      >
        {t("hero.scroll")}
        <ArrowDown className="animate-bounce" size={14} />
      </a>
    </section>
  );
}
