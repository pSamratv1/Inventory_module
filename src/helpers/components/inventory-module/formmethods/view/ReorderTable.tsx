/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef, useState } from "react";

import { useRef, useState } from "react";
import { useTable } from "react-table";
import {
  renderItemTableBody,
  RenderItemTableHead,
} from "../../../../../utils/methods/itemProps";
import { ControlBar } from "../../../common/table/ControlBar";
import Pagination from "../../../common/table/Pagination";
import Table from "../../../common/table/Table";
import CameraComponent from "helpers/components/common/scanners/BarCodeScanner";
import { BiBarcodeReader } from "react-icons/bi";
import {
  setAddCategoryTrue,
  setAddItemTrue,
  setScannerCameraOpen,
  setSupplierAddTrue,
} from "redux-app/inventory-module/InventorySlice";
import { addBtnControlbar } from "utils/methods/css";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";

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
  const dispatch = useAppDispatch();

  // Ref
  const currentTable = useRef<HTMLTableElement | null>(null);

  // States
  const [openCamera, setOpenCamera] = useState(false);

  // const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // const handleFilterChange = (e: any) => {
  //   const value = e.target.value || undefined;
  //   setFilter("show.name", value);
  //   setFilterInput(value);
  // };

  // Actions;
  const handleHeaderClick = (column: any) => {
    alert(column.Header);
  };

  const handleOpenCamera = () => {
    setOpenCamera(true);
    dispatch(setScannerCameraOpen(true));
  };

  // // Handle page count
  const handlePageClick = () => {};

  // Table props
  const tableProps = {
    currentTable,
    getTableProps,
    getTableBodyProps,
    renderHead: RenderItemTableHead({
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

  const controlbarProps = {
    addCategoryBtnControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Add Category",
      handleAction: () => dispatch(setAddCategoryTrue(true)),
    },

    addItemBtnControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Add Item",
      handleAction: () => dispatch(setAddItemTrue(true)),
    },
    addSupplierBtnControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Add Supplier",
      handleAction: () => dispatch(setSupplierAddTrue(true)),
    },
    openCameraControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Open Camera",
      icon: <BiBarcodeReader size={20} />,
      handleAction: () => handleOpenCamera(),
    },
  };

  // Render the UI for your table
  return (
    <div className="w-full h-full flex flex-col text-[13px] font-medium gap-2">
      <ControlBar {...controlbarProps} />
      {openCamera && <CameraComponent />}
      <Table {...tableProps} />
      <Pagination {...paginateProps} />
    </div>
  );
};
