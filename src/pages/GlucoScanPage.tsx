import { ArrowLeft, CheckCircle, GithubLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PhoneCarousel from "@/components/PhoneCarousel";
import PhoneMockup from "@/components/PhoneMockup";
import { glucoscanScreens, glucoscanStack } from "@/data/site";

export default function GlucoScanPage() {
  const { t } = useTranslation();
  const features = t("projects.glucoscan.features", { returnObjects: true });
  const standout = t("projects.glucoscan.standout", { returnObjects: true });

  return (
    <main className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
      <Link
        className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        to="/#projects"
      >
        <ArrowLeft size={16} />
        {t("projects.back")}
      </Link>

      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <PhoneCarousel showCaption size="lg" />

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-teal-300 uppercase">
            {t("projects.caseStudy")}
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            <span className="text-gradient">GlucoScan</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            {t("projects.glucoscan.tagline")}
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            {t("projects.glucoscan.description")}
          </p>
          <a
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition-colors hover:text-white"
            href="https://github.com/MisterGoodDeal/gluco-scan"
            rel="noreferrer"
            target="_blank"
          >
            <GithubLogo size={22} weight="duotone" />
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-20 grid gap-6 lg:grid-cols-2">
        <section className="glass rounded-[1.6rem] p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">
            {t("projects.glucoscan.featuresTitle")}
          </h2>
          <ul className="mt-5 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/70"
              >
                <CheckCircle
                  className="mt-0.5 shrink-0 text-teal-300"
                  size={18}
                  weight="fill"
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="glass rounded-[1.6rem] p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">
            {t("projects.glucoscan.standoutTitle")}
          </h2>
          <ul className="mt-5 space-y-4">
            {standout.map((item) => (
              <li
                key={item}
                className="border-l-2 border-teal-400/50 pl-4 text-sm leading-relaxed text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="mb-5 font-display text-2xl font-bold">
          {t("projects.glucoscan.stackTitle")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {glucoscanStack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-sm text-teal-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-14 text-center font-display text-3xl font-bold">
          <span className="text-gradient">
            {t("projects.glucoscan.galleryTitle")}
          </span>
        </h2>
        <div className="space-y-20">
          {glucoscanScreens.map((screen, i) => {
            const phoneRight = i % 2 === 1;

            return (
              <motion.figure
                key={screen.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
                initial={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={phoneRight ? "md:order-2" : undefined}>
                  <PhoneMockup
                    alt={t(`projects.glucoscan.screens.${screen.id}.title`)}
                    size="md"
                    src={screen.src}
                  />
                </div>
                <figcaption
                  className={`max-w-md ${
                    phoneRight
                      ? "md:order-1 md:ml-auto md:text-right"
                      : "md:mr-auto"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    {t(`projects.glucoscan.screens.${screen.id}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    {t(`projects.glucoscan.screens.${screen.id}.caption`)}
                  </p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}
