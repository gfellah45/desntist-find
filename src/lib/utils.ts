import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const getStatusConfig = (rate: number) => {
  if (rate >= 20) return { label: 'High Performer', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  if (rate < 10) return { label: 'At Risk', color: 'bg-rose-50 text-rose-700 border-rose-200' };
  return { label: 'Stable', color: 'bg-slate-50 text-slate-700 border-slate-200' };
};
