import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecommendationSectionProps {
  view: 'grid' | 'list';
  className?: string;
}

const RecommendationSection = ({ view, className }: RecommendationSectionProps) => {
  const isList = view === 'list';
  
  return (
    <div className={cn(
      "space-y-2",
      isList ? "hidden xl:flex flex-col min-w-[250px]" : "flex flex-col",
      className
    )}>
      <div className="flex items-center gap-1.5 text-amber-700">
        <Lightbulb className={cn(isList ? "h-3.5 w-3.5" : "h-3 w-3")} />
        <h4 className={cn(
          "font-bold uppercase tracking-wider",
          isList ? "text-[11px]" : "text-[9px]"
        )}>
          Recommendations
        </h4>
      </div>
      <ul className={cn("space-y-1.5", isList && "space-y-1")}>
        <li className="flex items-start gap-2">
          <div className={cn("rounded-full bg-amber-400 shrink-0", isList ? "h-1 w-1 mt-1.5" : "h-1 w-1 mt-1")} />
          <p className={cn(
            "font-medium text-slate-600 leading-tight",
            isList ? "text-[11px]" : "text-[10px]"
          )}>
            Consider increasing ad budget on top channels.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className={cn("rounded-full bg-amber-400 shrink-0", isList ? "h-1 w-1 mt-1.5" : "h-1 w-1 mt-1")} />
          <p className={cn(
            "font-medium text-slate-600 leading-tight",
            isList ? "text-[11px]" : "text-[10px]"
          )}>
            Optimize mobile landing page layout.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default RecommendationSection;
