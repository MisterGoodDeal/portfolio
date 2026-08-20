import { motion } from "framer-motion";

import { useTilt } from "@/hooks/useTilt";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "w-[160px]",
  md: "w-[220px] sm:w-[240px]",
  lg: "w-[240px] sm:w-[280px]",
};

export default function PhoneMockup({
  src,
  alt,
  className = "",
  size = "md",
}: Props) {
  const { glare, onLeave, onMove, ref, rotateX, rotateY } = useTilt(7);

  return (
    <div className={`[perspective:1400px] ${className}`}>
      <motion.div
        ref={ref}
        className={`${sizes[size]} group relative mx-auto [transform-style:preserve-3d]`}
        style={{ rotateX, rotateY }}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
      >
        <div className="absolute -inset-8 rounded-[3rem] bg-teal-400/20 blur-3xl" />
        <div className="phone-bezel relative">
          <div className="phone-screen">
            <img alt={alt} className="phone-screen-img" src={src} />
          </div>
          <div className="phone-island" />
          <div className="phone-home" />
          <motion.div
            className="pointer-events-none absolute inset-[8px] rounded-[28px] opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-100"
            style={{ background: glare }}
          />
        </div>
      </motion.div>
    </div>
  );
}
