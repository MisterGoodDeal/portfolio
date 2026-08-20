import type { MouseEvent } from "react";
import type { Project } from "@/data/site";

import { ArrowRight, ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Cover({ project }: { project: Project }) {
  if (project.pattern === "orbs") {
    return (
      <>
        <div className="absolute top-6 left-8 size-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute right-10 bottom-4 size-32 rounded-full bg-black/20 blur-2xl" />
      </>
    );
  }

  if (project.pattern === "wave") {
    return (
      <svg
        className="absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 400 180"
      >
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M0 ${70 + i * 18} Q 100 ${30 + i * 10} 200 ${70 + i * 18} T 400 ${70 + i * 18}`}
            fill="none"
            stroke="white"
            strokeOpacity={0.35 - i * 0.06}
            strokeWidth="1.5"
          />
        ))}
      </svg>
    );
  }

  if (project.pattern === "circuit") {
    return (
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    );
  }

  if (project.pattern === "rings") {
    return (
      <div className="absolute inset-0 grid place-items-center">
        <div className="size-28 rounded-full border border-white/30" />
        <div className="absolute size-40 rounded-full border border-white/20" />
        <div className="absolute size-52 rounded-full border border-white/10" />
      </div>
    );
  }

  if (project.pattern === "tiles") {
    return (
      <div className="absolute inset-6 grid grid-cols-4 gap-2 opacity-50">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl bg-white/15" />
        ))}
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "18px 18px",
      }}
    />
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 90, damping: 26, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 90, damping: 26, mass: 0.6 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const glareX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1), transparent 46%)`;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="h-full [perspective:1600px]">
      <motion.article
        ref={ref}
        className="group relative flex h-full transform-gpu flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0618]/70 shadow-[0_30px_80px_rgba(0,0,0,0.35)] [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
      >
        <div
          className="relative h-44 shrink-0 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.accent}55, ${project.accent}12 55%, #140c24)`,
            transform: "translateZ(12px)",
          }}
        >
          <Cover project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0618] via-transparent to-transparent" />
          <p className="absolute bottom-4 left-5 font-display text-xl font-bold [transform:translateZ(16px)]">
            {project.title}
          </p>
        </div>

        <div
          className="relative flex flex-1 flex-col space-y-4 p-5"
          style={{ transform: "translateZ(18px)" }}
        >
          <p className="line-clamp-3 text-sm leading-relaxed text-white/65">
            {t("projects.items", { returnObjects: true })[project.id]}
          </p>
          <div className="flex flex-1 flex-wrap content-start gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex min-h-7 items-center gap-3 pt-1">
            {project.github ? (
              <a
                aria-label={`GitHub — ${project.title}`}
                className="text-white/70 transition-colors hover:text-white"
                href={project.github}
                rel="noreferrer"
                target="_blank"
              >
                <GithubLogo size={22} weight="duotone" />
              </a>
            ) : null}
            {project.live ? (
              <a
                aria-label={`Lien — ${project.title}`}
                className="text-white/70 transition-colors hover:text-white"
                href={project.live}
                rel="noreferrer"
                target="_blank"
              >
                <ArrowUpRight size={22} />
              </a>
            ) : null}
            {project.href ? (
              <Link
                className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-teal-200 transition-colors hover:text-white"
                to={project.href}
              >
                {t("projects.more")}
                <ArrowRight size={14} weight="bold" />
              </Link>
            ) : null}
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: glare }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.6rem] opacity-0 ring-1 ring-inset ring-white/20 transition-opacity duration-200 group-hover:opacity-100"
          style={{ boxShadow: `0 0 40px ${project.accent}33` }}
        />
      </motion.article>
    </div>
  );
}
