import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";
import { useEffect } from "react";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl"
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition hover:bg-black/60">
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[2/1] overflow-hidden">
              <img src={project.banner} alt={`${project.title} banner`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            </div>
            <div className="p-8 pt-2">
            <div className="mb-3 inline-flex rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">{project.category}</div>
            <h3 className="font-display text-3xl font-bold gradient-text">{project.title}</h3>
            <p className="mt-3 text-muted-foreground">{project.description}</p>


            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground/80">Highlights</h4>
            <ul className="mt-2 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.78_0.15_200)]" />
                  {h}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground/80">Tech Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10">
                  <Github className="h-4 w-4" /> Source
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
