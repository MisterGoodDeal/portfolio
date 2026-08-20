import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import CosmicBackground from "@/components/CosmicBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ScrollManager from "@/components/ScrollManager";
import { site } from "@/data/site";
import GlucoScanPage from "@/pages/GlucoScanPage";
import HomePage from "@/pages/HomePage";
import TaskTimeTrackerPage from "@/pages/TaskTimeTrackerPage";
import TurtlecorpReviewPage from "@/pages/TurtlecorpReviewPage";

type ProjectMeta = {
  title: string;
  descKey:
    | "projects.glucoscan.tagline"
    | "projects.taskTimeTracker.tagline"
    | "projects.turtlecorpReview.tagline";
};

const projectMeta: Record<string, ProjectMeta> = {
  "/projects/glucoscan": {
    title: "GlucoScan",
    descKey: "projects.glucoscan.tagline",
  },
  "/projects/task-time-tracker": {
    title: "Task Time Tracker",
    descKey: "projects.taskTimeTracker.tagline",
  },
  "/projects/turtlecorp-review": {
    title: "Turtlecorp Review",
    descKey: "projects.turtlecorpReview.tagline",
  },
};

export default function App() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = projectMeta[pathname];

    document.title = meta ? `${meta.title} — ${site.name}` : t("meta.title");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta ? t(meta.descKey) : t("meta.description"));
  }, [i18n.language, pathname, t]);

  return (
    <div className="relative min-h-screen">
      <ScrollManager />
      <CosmicBackground />
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<GlucoScanPage />} path="/projects/glucoscan" />
        <Route
          element={<TaskTimeTrackerPage />}
          path="/projects/task-time-tracker"
        />
        <Route
          element={<TurtlecorpReviewPage />}
          path="/projects/turtlecorp-review"
        />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
      <Footer />
    </div>
  );
}
