import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectSummary } from "@/types";

interface ProjectCardProps {
  project: ProjectSummary;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141820] p-6 sm:p-7 transition-all duration-300",
        "hover:border-amber-500/40 hover:bg-[#191F2B] hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-slate-200">
            {project.category}
          </span>
          <span
            className={cn(
              "font-mono text-xs font-semibold uppercase tracking-wider",
              project.status === "Completed"
                ? "text-emerald-400"
                : project.status === "Ongoing"
                ? "text-amber-400"
                : "text-blue-400"
            )}
          >
            ● {project.status}
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FFFFFF] group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 font-sans text-xs text-[#C5BCB3]">
          <MapPin className="h-3.5 w-3.5 text-amber-400" />
          <span>{project.location}</span>
          {project.sqft && (
            <>
              <span className="text-white/20">•</span>
              <span>{project.sqft}</span>
            </>
          )}
        </div>

        <p className="mt-4 font-sans text-sm text-[#E2DDD5] leading-relaxed">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
        {project.client ? (
          <span className="font-sans text-xs text-[#A89F95]">
            Client: <strong className="text-slate-200 font-medium">{project.client}</strong>
          </span>
        ) : (
          <span className="font-mono text-xs text-[#A89F95] uppercase tracking-wider">
            {project.isConceptDemo ? "Architectural Landmark Concept" : "Verified Project"}
          </span>
        )}

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
  );
};
