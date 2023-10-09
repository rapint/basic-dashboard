"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Tabs, Tab } from "@nextui-org/react";

import LineChart from "./LineChart";
import { chartOption } from "@/utils/chart";

import { ChartProps } from "@/types";

export default function ChartBox({ data }: { data: ChartProps }) {
  const lineChartDataPortfolio1 = [
    {
      name: "Sales Over Time",
      data: data.salesOverTime.data,
    },
  ];

  const lineChartOption1 = {
    ...chartOption,
    xaxis: {
      ...chartOption.xaxis,
      categories: data.salesOverTime.labels,
    },
  };

  const lineChartDataPortfolio2 = [
    {
      name: "Use Engagement",
      data: data.userEngagement.data,
    },
  ];

  const lineChartOption2 = {
    ...chartOption,
    xaxis: {
      ...chartOption.xaxis,
      categories: data.userEngagement.labels,
    },
  };

  return (
    <Card className="w-full p-1 sm:p-4">
      <CardHeader>
        <div>Real-Time Chart</div>
      </CardHeader>
      <CardBody className="overflow-visible p-0 sm:p-4">
        <Tabs fullWidth size="md" aria-label="Tabs form">
          <Tab key="salesOverTime" title="Sales Over Time">
            <LineChart
              chartOptions={lineChartOption1}
              chartData={lineChartDataPortfolio1}
            />
          </Tab>
          <Tab key="userEngagement" title="User Engagement">
            <LineChart
              chartOptions={lineChartOption2}
              chartData={lineChartDataPortfolio2}
            />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
