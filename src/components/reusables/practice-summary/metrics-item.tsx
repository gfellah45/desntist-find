import { cn } from "@/lib/utils";

interface MetricItemProps {
  label: string;
  value: string | number;
  view: 'grid' | 'list';
  isPrimary?: boolean;
  suffix?: string;
}

const MetricItem = ({ label, value, view, isPrimary, suffix = "" }: MetricItemProps) => {
  if (view === 'list') {
    return (
      <div className="space-y-1">
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-widest",
          isPrimary ? "text-primary/60" : "text-slate-400"
        )}>
          {label}
        </p>
        <p className={cn(
          "text-xl font-black",
          isPrimary ? "text-primary" : "text-slate-900"
        )}>
          {value}{suffix}
        </p>
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-lg border p-2 transition-colors hover:bg-slate-50",
      isPrimary 
        ? "border-primary/20 bg-primary/3 ring-1 ring-primary/5" 
        : "border-slate-100 bg-slate-50/50"
    )}>
      <p className={cn(
        "text-[8px] font-bold uppercase tracking-wider mb-0.5",
        isPrimary ? "text-primary/60" : "text-slate-400"
      )}>
        {label}
      </p>
      <p className={cn(
        "text-base font-black leading-none",
        isPrimary ? "text-primary" : "text-slate-900"
      )}>
        {value}{suffix}
      </p>
    </div>
  );
};

export default MetricItem;