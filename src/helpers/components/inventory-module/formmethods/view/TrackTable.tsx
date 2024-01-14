/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import Table from "../../../common/table/Table";
import { useFilters, useSortBy, useTable } from "react-table";
import {
  RenderItemTableBody,
  renderItemTableHead,
} from "../../../../../utils/methods/itemProps";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface Column {
  Header: string;
  accessor: string;
}

interface TrackProductAccordionProps {
  columns: Column[];
  data: any; // You can replace 'any' with a specific type if possible
}

const TrackTable = (props: TrackProductAccordionProps) => {
  // Props
  const { columns, data } = props;

  // Ref
  const currentTable = useRef<HTMLTableElement | null>(null);

  // States
  // const [filterInput, setFilterInput] = useState("");

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters, useSortBy);

  // Actions
  const handleHeaderClick = (column: any) => {
    alert(column.Header);
  };

  // // Table props
  const tableProps = {
    currentTable,
    getTableProps,
    getTableBodyProps,
    renderHead: renderItemTableHead({
      headerGroups,
      handleHeaderClick,
    }),
    renderBody: RenderItemTableBody({
      rows,
      prepareRow,
    }),
  };

  return (
    <div className=" border border-solid border-gray-50 shadow-lg  rounded-xl ">
      <Table {...tableProps} />
    </div>
  );
};

export default TrackTable;
