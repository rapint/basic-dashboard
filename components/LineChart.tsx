import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type ChartState = {
  chartData: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chartOptions: ApexOptions;
};

export type ChartProps = ChartState & {
  [x: string]: any;
};

interface LineChartProps extends ChartProps {}

export default function LineChart({ chartOptions, chartData }: LineChartProps) {
  return (
    <div className="text-white dark:text-black border rounded-md p-1">
      {typeof window !== "undefined" && (
        <Chart
          options={chartOptions}
          series={chartData}
          type="area"
          width="100%"
          height={300}
        />
      )}
    </div>
  );
}
