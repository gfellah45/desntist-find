import { PracticeSummary } from "@/components/definations/types/practice-summary";

export const mockPractices: PracticeSummary[] = [
  {
    id: "1",
    name: "Lagos Dental Clinic",
    city: "Lagos",
    country: "Nigeria",
    newPatientsThisMonth: 64,
    appointmentRequests: 182,
    conversionRate: 28.5,
    monthlyTrend: [25, 32, 40, 38, 52, 64],
    showRate: 85,
  },
  {
    id: "2",
    name: "Abuja Tooth Haven",
    city: "Abuja",
    country: "Nigeria",
    newPatientsThisMonth: 42,
    appointmentRequests: 112,
    conversionRate: 19.8,
    monthlyTrend: [30, 28, 35, 32, 38, 42],
    showRate: 90,
  },
  {
    id: "3",
    name: "Port Harcourt Smile",
    city: "Port Harcourt",
    country: "Nigeria",
    newPatientsThisMonth: 15,
    appointmentRequests: 156,
    conversionRate: 9.2,
    monthlyTrend: [25, 22, 18, 15, 12, 15],
    showRate: 72,
  },
  {
    id: "4",
    name: "Ibadan Care Dental",
    city: "Ibadan",
    country: "Nigeria",
    newPatientsThisMonth: 38,
    appointmentRequests: 94,
    conversionRate: 21.4,
    monthlyTrend: [22, 25, 28, 31, 35, 38],
    showRate: 88,
  }
];