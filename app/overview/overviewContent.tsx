import { CardDetailsProps } from "@/types/CardDetailsTypes";
import { barChartProps, pieChartProps } from "@/types/overviewTypes";

export const cardDetails: CardDetailsProps[] = [
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
    label: "Paid",
    percentage: 35,
  },
  {
    label: "Visits",
    percentage: 65,
  },
  {
    label: "Traffic",
  },
];
