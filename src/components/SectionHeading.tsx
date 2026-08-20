import type { ReactNode } from "react";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-cyan-300 uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-white/65">
          {children}
        </p>
      ) : null}
    </motion.div>
  );
}
