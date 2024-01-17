/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef, useState } from "react";

import { useRef, useState } from "react";
import { CommonDesignSchema } from "../../../helpers/components/common/table/TableSchema";
import { useFilters, useSortBy, useTable } from "react-table";
import { ControlBar } from "../../../helpers/components/common/table/ControlBar";
import Pagination from "../../../helpers/components/common/table/Pagination";
import Table from "../../../helpers/components/common/table/Table";
import {
  RenderItemTableBody,
  renderItemTableHead,
} from "../../../utils/methods/itemProps";
import { addBtnControlbar } from "../../../utils/methods/css";
import { useAppDispatch } from "../../../helpers/hooks/useStoreHooks";
import {
  setAddCategoryTrue,
  setAddItemTrue,
  setScannerCameraOpen,
  setSupplierAddTrue,
} from "../../../redux-app/inventory-module/InventorySlice";
import { BiBarcodeReader } from "react-icons/bi";
import CameraComponent from "helpers/components/common/scanners/BarCodeScanner";

export const ViewItemTable = (props: CommonDesignSchema) => {
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
  const handleOpenCamera = () => {
    setOpenCamera(true);
    dispatch(setScannerCameraOpen(true));
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
    renderBody: RenderItemTableBody({ rows, prepareRow, getTableBodyProps }),
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
  // () => dispatch(setAddSupplierTrue(true))
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
