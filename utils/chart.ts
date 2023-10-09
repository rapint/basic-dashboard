import { ApexOptions } from "apexcharts";

export const chartOption: ApexOptions = {
  chart: {
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#aa56ff", "#39B8FF"],
  markers: {
    size: 0,
    colors: ["#4318FF", "#39B8FF"],
    strokeWidth: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  xaxis: {
    labels: {
      show: false,
      style: {
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    axisBorder: {
      show: true,
      color: "#4F504F",
    },
  },
  yaxis: {
    show: true,
    labels: {
      style: {
        // colors: "#FCFFFC",
        fontSize: "14px",
        fontWeight: "400",
      },
    },
    axisBorder: {
      show: true,
      color: "#4F504F",
    },
  },
  grid: {
    show: false,
    column: {
      opacity: 0.5,
    },
  },
};
