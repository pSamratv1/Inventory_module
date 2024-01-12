/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef, useState } from "react";

import { useRef } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import {
  renderItemTableHead,
  renderItemTableBody,
} from "../../../../../utils/methods/itemProps";
import { ControlBar } from "../../../common/table/ControlBar";
import Pagination from "../../../common/table/Pagination";
import Table from "../../../common/table/Table";

interface Column {
  Header: string;
  accessor: string;
}

interface ReorderTableProps {
  columns: Column[];
  data: any; // You can replace 'any' with a specific type if possible
}

export const ReorderTable = (props: ReorderTableProps) => {
  // Props
  const { columns, data } = props;

  // Redux
  // Ref
  const currentTable = useRef<HTMLTableElement | null>(null);

  // States
  // const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters, useSortBy);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleFilterChange = (e: any) => {
  //   const value = e.target.value || undefined;
  //   setFilter("show.name", value);
  //   setFilterInput(value);
  // };

  // Actions
  const handleHeaderClick = (column: any) => {
    alert(column.Header);
  };

  // Handle page count
  const handlePageClick = () => {};

  // Table props
  const tableProps = {
    currentTable,
    getTableProps,
    getTableBodyProps,
    renderHead: renderItemTableHead({
      headerGroups,
      handleHeaderClick,
    }),
    renderBody: renderItemTableBody({ rows, prepareRow }),
  };

  // Pagination props
  const paginateProps = {
    // isLoading,
    currentPage: 0,
    paginationCount: 10,
    handlePageClick,
    css: {},
  };

  // Render the UI for your table
  return (
    <div className="w-full h-full flex flex-col text-[13px] font-medium gap-2">
      <ControlBar />
      <Table {...tableProps} />
      <Pagination {...paginateProps} />
    </div>
  );
};
