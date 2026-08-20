import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import WindowMockup from "@/components/WindowMockup";
import {
  turtlecorpBackStack,
  turtlecorpFrontStack,
  turtlecorpScreens,
} from "@/data/site";

export default function TurtlecorpReviewPage() {
  const { t } = useTranslation();
  const features = t("projects.turtlecorpReview.features", {
    returnObjects: true,
  });
  const standout = t("projects.turtlecorpReview.standout", {
    returnObjects: true,
  });

  return (
    <main className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
      <Link
        className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        to="/#projects"
      >
        <ArrowLeft size={16} />
        {t("projects.back")}
      </Link>

      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-amber-300 uppercase">
            {t("projects.caseStudy")}
          </p>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            <span className="text-gradient">Turtlecorp Review</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            {t("projects.turtlecorpReview.tagline")}
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            {t("projects.turtlecorpReview.description")}
          </p>
        </div>

        <WindowMockup
          alt={t("projects.turtlecorpReview.screens.video.title")}
          glow="bg-amber-400/20"
          src="/turtlecorp-review/review-video.png"
        />
      </div>

      <div className="mt-20 grid gap-6 lg:grid-cols-2">
        <section className="glass rounded-[1.6rem] p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold">
            {t("projects.turtlecorpReview.featuresTitle")}
          </h2>
          <ul className="mt-5 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm leading-relaxed text-white/70"
              >
                <CheckCircle
                  className="mt-0.5 shrink-0 text-amber-300"
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
            {t("projects.turtlecorpReview.standoutTitle")}
          </h2>
          <ul className="mt-5 space-y-4">
            {standout.map((item) => (
              <li
                key={item}
                className="border-l-2 border-amber-400/50 pl-4 text-sm leading-relaxed text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 font-display text-2xl font-bold">
            {t("projects.turtlecorpReview.stackFrontTitle")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {turtlecorpFrontStack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-sm text-amber-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-5 font-display text-2xl font-bold">
            {t("projects.turtlecorpReview.stackBackTitle")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {turtlecorpBackStack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-sm text-amber-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-14 text-center font-display text-3xl font-bold">
          <span className="text-gradient">
            {t("projects.turtlecorpReview.galleryTitle")}
          </span>
        </h2>
        <div className="space-y-20">
          {turtlecorpScreens.map((screen, i) => {
            const mediaRight = i % 2 === 1;

            return (
              <motion.figure
                key={screen.id}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
                initial={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className={mediaRight ? "md:order-2" : undefined}>
                  <WindowMockup
                    alt={t(
                      `projects.turtlecorpReview.screens.${screen.id}.title`,
                    )}
                    glow="bg-amber-400/20"
                    src={screen.src}
                  />
                </div>
                <figcaption
                  className={`max-w-md ${
                    mediaRight
                      ? "md:order-1 md:ml-auto md:text-right"
                      : "md:mr-auto"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-amber-300 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                    {t(`projects.turtlecorpReview.screens.${screen.id}.title`)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/60">
                    {t(
                      `projects.turtlecorpReview.screens.${screen.id}.caption`,
                    )}
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
