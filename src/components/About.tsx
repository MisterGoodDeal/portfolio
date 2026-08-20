import type { CSSProperties } from "react";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionHeading from "@/components/SectionHeading";
import { orbitSkills } from "@/data/site";

export default function About() {
  const { t } = useTranslation();
  const stats = t("about.stats", { returnObjects: true });

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24" id="about">
      <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")}>
        {t("about.bio")}
      </SectionHeading>

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-3xl px-4 py-6 text-center"
            >
              <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="relative mx-auto grid h-[340px] w-full max-w-md place-items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="absolute size-56 rounded-full border border-white/10" />
          <div className="absolute size-72 rounded-full border border-white/5" />
          <div className="glass z-10 grid size-28 place-items-center overflow-hidden rounded-full">
            <img
              alt={t("about.avatarAlt")}
              className="h-full w-full object-cover"
              src="/smile.png"
            />
          </div>

          <div className="absolute size-56">
            {orbitSkills.slice(0, 4).map((skill, i) => (
              <span
                key={skill}
                className="orbit-item rounded-full border border-white/10 bg-[#0b0618]/80 px-3 py-1 text-[11px] font-medium whitespace-nowrap text-white/80 backdrop-blur"
                style={
                  {
                    "--orbit-r": "112px",
                    "--orbit-d": "28s",
                    "--orbit-delay": `${-i * 7}s`,
                    "--orbit-a": `${i * 90}deg`,
                  } as CSSProperties
                }
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="absolute size-72">
            {orbitSkills.slice(4).map((skill, i) => (
              <span
                key={skill}
                className="orbit-item orbit-item-rev rounded-full border border-cyan-300/20 bg-[#0b0618]/80 px-3 py-1 text-[11px] font-medium whitespace-nowrap text-cyan-100/90 backdrop-blur"
                style={
                  {
                    "--orbit-r": "144px",
                    "--orbit-d": "40s",
                    "--orbit-delay": `${-(i * 10 + 5)}s`,
                    "--orbit-a": `${i * 90 + 45}deg`,
                  } as CSSProperties
                }
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
