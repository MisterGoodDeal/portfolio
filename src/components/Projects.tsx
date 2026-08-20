import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/site";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      id="projects"
    >
      <SectionHeading
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
