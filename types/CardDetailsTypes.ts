import { ReactElement } from "react";

export interface overviewCardDetailsProps {
  title: string;
  stats: string;
  isRise: boolean;
  trendPercent: number;
}

export interface reportCardDetailsProps {
  id: string;
  icon: ReactElement;
  label: string;
  value: string;
}

export interface reportCardProps {
  icon: ReactElement;
  label: string;
  value: number;
}
