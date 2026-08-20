import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true });
  const education = t("experience.education", { returnObjects: true });

  return (
    <section
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      id="experience"
    >
      <SectionHeading
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ol className="relative space-y-6 border-l border-white/10 pl-6">
          {jobs.map((job, i) => (
            <motion.li
              key={job.company}
              className="glass relative rounded-3xl p-6"
              initial={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="absolute top-8 -left-[31px] size-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
              <p className="text-xs tracking-widest text-cyan-300 uppercase">
                {job.period} · {job.contract}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">
                {job.title}{" "}
                <span className="text-white/50">— {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/65">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <div className="space-y-4">
          {education.map((item, i) => (
            <motion.article
              key={`${item.school}-${item.title}`}
              className="glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs tracking-widest text-fuchsia-300 uppercase">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">
                {item.school} · {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
