import { overviewCardDetailsProps } from "@/types/CardDetailsTypes";
import { barChartProps, pieChartProps } from "@/types/overviewTypes";

export const overviewCardDetails: overviewCardDetailsProps[] = [
  {
    title: "Total Users",
    stats: "10,422",
    isRise: true,
    trendPercent: 12.4,
  },
  {
    title: "Revenue",
    stats: "$233,041",
    isRise: true,
    trendPercent: 8.2,
  },
  {
    title: "Active Sessions",
    stats: "2,318",
    isRise: false,
    trendPercent: 3.1,
  },
  {
    title: "Conversion Rate",
    stats: "5.48%",
    isRise: true,
    trendPercent: 1.7,
  },
];

export const barChartDetails: barChartProps[] = [
  {
    label: "Mon",
    value: 240,
  },
  {
    label: "Tue",
    value: 310,
  },
  {
    label: "Wed",
    value: 180,
  },
  {
    label: "Thu",
    value: 420,
  },
  {
    label: "Fri",
    value: 390,
  },
  {
    label: "Sat",
    value: 150,
  },
  {
    label: "Sun",
    value: 90,
  },
];

export const pieChartDetails: pieChartProps[] = [
  {
    label: "Visits",
    value: 225,
    color: "#0284c7 ",
  },
  {
    label: "Paid",
    value: 301,
    color: "#38bdf8",
  },
  {
    label: "Traffic",
    value: 207,
    color: "#64748b ",
  },
  {
    label: "Annual",
    value: 153,
    color: "#94a3b8",
  },
  {
    label: "Goal",
    value: 90,
    color: "#cbd5e1",
  },
];

export const totalUsersSparkline = [
  { value: 30 },
  { value: 45 },
  { value: 38 },
  { value: 50 },
  { value: 42 },
  { value: 60 },
  { value: 55 },
  { value: 68 },
];
