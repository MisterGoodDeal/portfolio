import { motion } from "framer-motion";

import { useTilt } from "@/hooks/useTilt";

type Props = {
  src: string;
  alt: string;
  glow?: string;
};

export default function WindowMockup({
  src,
  alt,
  glow = "bg-cyan-400/15",
}: Props) {
  const { glare, onLeave, onMove, ref, rotateX, rotateY } = useTilt(5);

  return (
    <div className="[perspective:1400px]">
      <motion.div
        ref={ref}
        className="group relative [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
      >
        <div
          className={`absolute -inset-6 rounded-[1.5rem] blur-3xl ${glow}`}
        />
        <div className="window-bezel relative">
          <div className="window-chrome">
            <span className="window-dot bg-[#ff5f57]" />
            <span className="window-dot bg-[#febc2e]" />
            <span className="window-dot bg-[#28c840]" />
          </div>
          <img alt={alt} className="window-screen-img" src={src} />
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-100"
            style={{ background: glare }}
          />
        </div>
      </motion.div>
    </div>
  );
}
