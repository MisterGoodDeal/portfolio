import { List, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled || open
            ? "glass"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link className="font-display text-sm font-bold tracking-wide" to="/">
          {site.name.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
              to={`/${item.href}`}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            aria-expanded={open}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            className="grid size-10 place-items-center rounded-full text-white md:hidden"
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="glass absolute top-20 mx-4 flex w-[calc(100%-2rem)] max-w-5xl flex-col gap-2 rounded-3xl p-4 md:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5"
                to={`/${item.href}`}
                onClick={() => setOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
