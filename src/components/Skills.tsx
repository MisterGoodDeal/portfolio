import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionHeading from "@/components/SectionHeading";
import { skillGroups, skills } from "@/data/site";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={t("skills.eyebrow")} title={t("skills.title")} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.article
            key={group}
            className="glass rounded-3xl p-5"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="mb-3 text-xs tracking-[0.22em] text-cyan-300 uppercase">
              {t(`skills.groups.${group}`)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.group === group)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-white/80"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
