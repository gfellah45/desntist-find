import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <Tabs 
      value={view} 
      onValueChange={(value) => onViewChange(value as 'grid' | 'list')}
      className="w-fit"
    >
      <TabsList className="grid w-full grid-cols-2 h-10 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
        <TabsTrigger 
          value="grid" 
          className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white text-slate-500 font-bold transition-all gap-2"
        >
          <LayoutGrid className="h-4 w-4" />
          Grid
        </TabsTrigger>
        <TabsTrigger 
          value="list" 
          className="rounded-lg data-[state=active]:bg-slate-900 data-[state=active]:text-white text-slate-500 font-bold transition-all gap-2"
        >
          <List className="h-4 w-4" />
          List
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ViewToggle;
