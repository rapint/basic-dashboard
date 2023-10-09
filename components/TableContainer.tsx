import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { HeaderProps, RecentTransactionProps, TopProductProps } from "@/types";

export default function TableContainer({
  headers,
  records,
  rowsPerPage,
}: {
  headers: HeaderProps[];
  records: RecentTransactionProps[] | TopProductProps[];
  rowsPerPage: number;
}) {
  const [page, setPage] = useState<number>(1);
  const pages = Math.ceil(records.length / rowsPerPage);

  const items: RecentTransactionProps[] | TopProductProps[] = useMemo(() => {
    const start: number = (page - 1) * rowsPerPage;
    const end: number = start + rowsPerPage;
    return records.slice(start, end);
  }, [page, records]);
  return (
    <Table
      removeWrapper
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        {headers.map((item: HeaderProps) => (
          <TableColumn key={item.key}>{item.name}</TableColumn>
        ))}
      </TableHeader>

      <TableBody items={items}>
        {(item: RecentTransactionProps | TopProductProps) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
