import { cn } from "@/lib/utils";

interface MonthlyTrendProps {
  data: number[];
  view: 'grid' | 'list';
  className?: string;
}

const MonthlyTrend = ({ data, view, className }: MonthlyTrendProps) => {
  const isList = view === 'list';
  const maxTrend = Math.max(...data);

  return (
    <div className={cn(
      "space-y-1.5",
      isList ? "w-32 hidden lg:flex flex-col gap-2" : "flex flex-col",
      className
    )}>
      <div className="flex items-center justify-between">
        <h4 className={cn(
          "font-black uppercase tracking-widest text-slate-400",
          isList ? "text-[9px] text-center w-full" : "text-[8px]"
        )}>
          Trend
        </h4>
      </div>
      <div className={cn(
        "flex items-end gap-1 px-0.5",
        "h-12" // Uniform height for labels
      )}>
        {data.map((val, i) => (
          <div key={i} className="group/bar relative flex-1 flex flex-col items-center justify-end h-full">
            {/* Value Tooltip - shows on hover */}
            <span className="absolute -top-4 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 text-white text-[7px] font-bold px-1 rounded-sm pointer-events-none z-10 whitespace-nowrap">
              {val}
            </span>
            
            <div 
              className={cn(
                "w-full transition-all duration-300 rounded-[1px] bg-slate-200 group-hover/bar:bg-primary group-hover/bar:scale-y-105",
                isList && "bg-slate-100" 
              )}
              style={{ height: `${(val / maxTrend) * 100}%` }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyTrend;
