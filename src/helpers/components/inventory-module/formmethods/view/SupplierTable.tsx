/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";

import CameraComponent from "helpers/components/common/scanners/BarCodeScanner";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";
import { BiBarcodeReader } from "react-icons/bi";
import {
  setScannerCameraOpen,
  setAddCategoryTrue,
  setAddItemTrue,
  setSupplierAddTrue,
} from "redux-app/inventory-module/InventorySlice";
import { addBtnControlbar } from "utils/methods/css";
import {
  renderItemTableHead,
  renderItemTableBody,
} from "utils/methods/itemProps";
import { ControlBar } from "helpers/components/common/table/ControlBar";
import Pagination from "helpers/components/common/table/Pagination";
import Table from "helpers/components/common/table/Table";
import { CommonDesignSchema } from "helpers/components/common/table/TableSchema";
import { useTable, useFilters, useSortBy } from "react-table";

const SupplierTable = (props: CommonDesignSchema) => {
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
    renderBody: renderItemTableBody({ rows, prepareRow, getTableBodyProps }),
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
  return (
    <div className="w-full h-full flex flex-col text-[13px] font-medium gap-2">
      <ControlBar {...controlbarProps} />
      {openCamera && <CameraComponent />}
      <Table {...tableProps} />
      <Pagination {...paginateProps} />
    </div>
  );
};

export default SupplierTable;
