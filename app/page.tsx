import TableBox from "@/components/TableBox";
import ChartBox from "@/components/ChartBox";
import MapBox from "@/components/MapBox";
import ContactUS from "@/components/ContactUs";
import { TableProps, LocationProps, ChartProps } from "@/types";

async function getData() {
  const res = await fetch("https://dashboard-api-dusky.vercel.app/api/get", {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN || "",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getData();
  const { charts, tables, map } = data.dashboardData;

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex w-full gap-6 flex-col lg:flex-row">
        <ChartBox data={charts as ChartProps} />
        <TableBox data={tables as TableProps} />
      </div>
      <MapBox data={map?.locations as LocationProps[]} />
      <ContactUS />
    </section>
  );
}
