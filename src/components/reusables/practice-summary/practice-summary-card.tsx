import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, ChevronRight } from "lucide-react";
import { cn, getInitials, getStatusConfig } from "@/lib/utils";
import { PracticeSummary } from "../../definations/types/practice-summary";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MetricItem from "./metrics-item";
import RecommendationSection from "./recommendation-section";
import MonthlyTrend from "./monthly-trend";

interface PracticeSummaryCardProps {
  data: PracticeSummary;
  view?: 'grid' | 'list';
}


const ListView = ({ data, status }: { data: PracticeSummary, status: any }) => (
  <Card className="w-full cursor-pointer overflow-hidden border-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-slate-50/50 hover:translate-x-1.5 group bg-white">
    <div className="flex flex-col md:flex-row md:items-center p-6 gap-6">
      <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-4 min-w-[280px]">
        <Avatar size="lg" className="h-16 w-16 md:h-14 md:w-14 border-2 border-white shadow-md">
          <AvatarImage alt={data.name} />
          <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-lg md:text-base">
            {getInitials(data.name)}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-xl md:text-lg font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
            {data.name}
          </CardTitle>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-slate-500 font-medium text-xs">
            <MapPin className="h-3 w-3" />
            {data.city}, {data.country}
          </div>
          <Badge variant="outline" className={cn(status.color, "mt-1 font-bold px-2 py-0 text-[10px] md:text-[9px] uppercase tracking-wider border shadow-none")}>
            {status.label}
          </Badge>
        </div>
      </div>

      <Separator orientation="vertical" className="hidden md:block h-12 bg-slate-100" />

  
      <div className="grid grid-cols-4 flex-1 gap-2 md:gap-8">
        <MetricItem view="list" label="Patients" value={data.newPatientsThisMonth} />
        <MetricItem view="list" label="Requests" value={data.appointmentRequests} />
        <MetricItem view="list" label="Conversion" value={data.conversionRate} suffix="%" isPrimary />
        <MetricItem view="list" label="Show Rate" value={data.showRate} suffix="%" />
      </div>

      <Separator orientation="vertical" className="hidden lg:block h-12 bg-slate-100" />

      <MonthlyTrend view="list" data={data.monthlyTrend} />

      <Separator orientation="vertical" className="hidden xl:block h-12 bg-slate-100" />
   
      <RecommendationSection view="list" />

 
      <div className="flex items-center justify-center md:justify-end gap-3 mt-4 md:mt-0">
        <Button size="sm" variant="ghost" className="hidden md:flex text-primary font-bold hover:text-primary hover:bg-primary/5 px-4 h-10 rounded-lg group-hover:bg-primary/5 transition-colors">
          Details
        </Button>
        <Button size="icon" variant="secondary" className="h-12 w-12 md:h-10 md:w-10 shrink-0 rounded-full md:rounded-lg bg-slate-900 text-white group-hover:bg-primary group-hover:scale-110 shadow-lg md:shadow-none transition-all duration-300">
          <ChevronRight className="h-5 w-5 md:h-4 md:w-4 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </div>
  </Card>
);


const GridView = ({ data, status }: { data: PracticeSummary, status: any }) => (
  <Card className="w-full cursor-pointer sm:max-w-[300px] overflow-hidden border-slate-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group bg-white mx-auto sm:mx-0">
    <CardHeader className="p-3 pb-1.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex gap-2.5">
          <Avatar className="h-9 w-9 border-2 border-white shadow-sm">
            <AvatarImage alt={data.name} />
            <AvatarFallback className="bg-slate-100 text-[10px] text-slate-600 font-bold">
              {getInitials(data.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <CardTitle className="text-[13px] font-bold text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors truncate">
              {data.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-1 mt-1 text-slate-500 font-medium text-[10px] truncate">
              <MapPin className="h-2.5 w-2.5" />
              {data.city}, {data.country}
            </CardDescription>
          </div>
        </div>
        <Badge variant="outline" className={cn(status.color, "font-bold px-1.5 py-0 text-[8px] uppercase tracking-wider border shadow-none whitespace-nowrap")}>
          {status.label.split(' ')[0]}
        </Badge>
      </div>
    </CardHeader>

    <CardContent className="p-3 grid gap-3">
      <div className="grid grid-cols-2 gap-2">
        <MetricItem view="grid" label="Patients" value={data.newPatientsThisMonth} />
        <MetricItem view="grid" label="Requests" value={data.appointmentRequests} />
        <MetricItem view="grid" label="Conversion" value={data.conversionRate} suffix="%" isPrimary />
        <MetricItem view="grid" label="Show Rate" value={data.showRate} suffix="%" />
      </div>

      <MonthlyTrend view="grid" data={data.monthlyTrend} />

      <Separator className="bg-slate-100" />

      <RecommendationSection view="grid" />
    </CardContent>

    <div className="px-3 pb-3">
      <Button className="w-full h-8 bg-slate-900 text-white hover:bg-slate-800 rounded-md text-[10px] font-bold transition-all active:scale-[0.98]">
        Review Details
      </Button>
    </div>
  </Card>
);


const PracticeSummaryCard = ({ data, view = 'grid' }: PracticeSummaryCardProps) => {
  const status = getStatusConfig(data.conversionRate);

  if (view === "list") {
    return <ListView data={data} status={status} />;
  }

  return <GridView data={data} status={status} />;
};

export default PracticeSummaryCard;
