"use client";
import React from "react";
import { Card, CardHeader, CardBody, Tabs, Tab } from "@nextui-org/react";

import TableContainer from "./TableContainer";
import { TableProps } from "@/types";

export default function TableBox({ data }: { data: TableProps }) {
  const rowsPerPage: number = 5;
  const headers = [
    [
      {
        key: "id",
        name: "ID",
      },
      {
        key: "user",
        name: "User",
      },
      {
        key: "amount",
        name: "Amount",
      },
      {
        key: "date",
        name: "Date",
      },
    ],
    [
      {
        key: "id",
        name: "ID",
      },
      {
        key: "name",
        name: "Name",
      },
      {
        key: "sales",
        name: "Sales",
      },
    ],
  ];
  return (
    <Card className="w-full p-2 sm:p-4">
      <CardHeader>
        <div>Real-Time Chart</div>
      </CardHeader>
      <CardBody className="p-0 sm:p-4">
        <Tabs fullWidth size="md" aria-label="Tabs form">
          <Tab key="recentTransactions" title="Recent Transactions">
            <TableContainer
              headers={headers[0]}
              records={data.recentTransactions}
              rowsPerPage={rowsPerPage}
            />
          </Tab>
          <Tab key="topProducts" title="Top Products">
            <TableContainer
              headers={headers[1]}
              records={data.topProducts}
              rowsPerPage={rowsPerPage}
            />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
