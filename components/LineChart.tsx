import dynamic from "next/dist/shared/lib/dynamic";
import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";

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
      <Chart
        options={chartOptions}
        series={chartData}
        type="area"
        width="100%"
        height={300}
      />
    </div>
  );
}
