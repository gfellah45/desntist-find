import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { mockPractices } from "@/constant/data/mockPracticeData";
import ViewToggle from "@/components/reusables/view-toggle";
import PracticeSummaryCard from "@/components/reusables/practice-summary/practice-summary-card";

export const Route = createFileRoute("/")({ component: App });



function App() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Practice Card Overview</h1>
          </div>
          
          <ViewToggle view={view} onViewChange={setView} />
        </div>

        
        <div className={view === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" 
          : "flex flex-col gap-4"
        }>
          {mockPractices.map((practice) => (
            <PracticeSummaryCard
              key={practice.id} 
              data={practice} 
              view={view} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}