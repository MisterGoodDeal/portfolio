import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import PhoneMockup from "@/components/PhoneMockup";
import { glucoscanScreens } from "@/data/site";

type Props = {
  size?: "sm" | "md" | "lg";
  showCaption?: boolean;
};

export default function PhoneCarousel({
  size = "md",
  showCaption = false,
}: Props) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const screen = glucoscanScreens[index];

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % glucoscanScreens.length);
    }, 3800);

    return () => window.clearInterval(id);
  }, [paused]);

  const title = t(`projects.glucoscan.screens.${screen.id}.title`);
  const caption = t(`projects.glucoscan.screens.${screen.id}.caption`);

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <PhoneMockup alt={title} size={size} src={screen.src} />

      <div className="mt-5 flex gap-2">
        {glucoscanScreens.map((item, i) => (
          <button
            key={item.id}
            aria-label={t(`projects.glucoscan.screens.${item.id}.title`)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-teal-300"
                : "w-2 bg-white/25 hover:bg-white/50"
            }`}
            type="button"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {showCaption ? (
        <p className="mt-4 max-w-xs text-center text-sm text-white/60">
          <span className="font-medium text-white/85">{title}</span>
          <span className="mt-1 block">{caption}</span>
        </p>
      ) : null}
    </div>
  );
}
