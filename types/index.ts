import { type } from "os";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ChartProps = {
  salesOverTime: {
    labels: string[];
    data: number[];
  };
  userEngagement: {
    labels: string[];
    data: number[];
  };
};

export type TableProps = {
  recentTransactions: RecentTransactionProps[];
  topProducts: TopProductProps[];
};

export type RecentTransactionProps = {
  id: number;
  user: string;
  amount: string;
  date: string;
};

export type TopProductProps = {
  id: string;
  name: string;
  sales: number;
};

export type LocationProps = {
  latitude: number;
  longitude: number;
  label: string;
  activity: number;
};

export type HeaderProps = {
  key: string;
  name: string;
};
