/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import { Badge } from "../../helpers/components/common";
import { defaultThCss, tableTdCss, tableThCss } from "../constants/table";

import TrackInnerTable from "helpers/components/inventory-module/formmethods/view/TrackInnerTable";

export const ROLE_TABLE_MEMO = [
  {
    Header: "",
    id: "item_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Item Category",
        accessor: "item_category",
      },
      {
        Header: "On Hand",
        accessor: "on_hand",
      },
      {
        Header: "Purchase Date",
        accessor: "purchase_date",
      },
      {
        Header: "Expiry Date",
        accessor: "expiry_date",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
  },
];

export const formInputs: any = [
  {
    username: "kalyan",
    label: "Select example",
    type: "select",
    options: [
      { label: "Option 123213123", value: "optione_1" },
      { label: "Option 2", value: "option_2" },
      { label: "Option 3", value: "option_2" },
    ],
  },
  { username: "name", type: "text" },
  { username: "contact", type: "text" },
  {
    username: "role",
    label: "Choose an option",
    type: "select",
    options: [
      { label: "Option 1", value: "option_1" },
      { label: "Option 2", value: "option_2" },
    ],
  },
  { username: "title", type: "text" },
  { username: "status", label: "Status", type: "checkbox", status: true },
];

// Subscriptions List
export const subscriptions = ["Inventory Management"];

// ViewNavOrganizationle header
export const renderItemTableHead = ({
  headerGroups,
  handleHeaderClick,
}: any) => {
  return (
    <>
      {headerGroups.map((headerGroup: any) => {
        return (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              console.log(column);
              const isId = column.Header.toLowerCase() === "id";
              return column.hideHeader === false ? null : (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`${
                    isId ? tableThCss(true) : tableThCss(false)
                  } ${defaultThCss}`}
                  onClick={() => handleHeaderClick(column)}
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

// ViewNavReorder header
export const RenderItemTableHead = ({
  headerGroups,
  handleHeaderClick,
}: any) => {
  return (
    <>
      {headerGroups.map((headerGroup: any) => {
        return (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              const { getSortByToggleProps } = column;
              return column.hideHeader === false ? null : (
                <th
                  {...column.getHeaderProps(getSortByToggleProps)}
                  className={`${
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc py-7"
                        : "sort-asc py-7"
                      : tableThCss
                  } ${defaultThCss}`}
                  // className={`${
                  //   isId ? tableThCss(false) : tableThCss(true)
                  // } ${defaultThCss}`}
                  onClick={() => handleHeaderClick(column)}
                >
                  {column.render("Header")}
                </th>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};
// ViewNavOrganizationle body
export const RenderItemTableBody = ({ rows, prepareRow }: any) => {
  const [clickedId, setClickedId] = useState(0);
  const [testId, setTestId] = useState<number[] | any>([]);
  const [isFlag, setIsFlag] = useState(false);

  // currentTable,
  // getTableProps,
  // getTableBodyProps,
  // renderHead,
  // renderBody,

  const handleRowClick = (e: any, id: number) => {
    const result = e.target.parentElement.children;
    const testId1 = Number(result[1].innerText);

    setClickedId(id);
    setIsFlag(!isFlag);
    setTestId([...testId, testId1]);
  };

  // useEffect
  useEffect(() => {
    if (testId[testId.length - 2] !== clickedId) {
      setIsFlag(true);
    }
  }, [clickedId, testId, isFlag]);

  return (
    <>
      {/* {rows.map((row, i:number) => { */}
      {rows.map((row: any, idx: number) => {
        prepareRow(row);
        const isLastRow = idx === rows.length - 1;
        const clickedId = row.values.id;

        return (
          <React.Fragment key={idx}>
            <tr
              {...row.getRowProps()}
              onClick={(e: any) => handleRowClick(e, clickedId)}
            >
              {row.cells.map((cell: any, idx: number) => {
                const isId = cell.column.Header.toLowerCase() === "id";
                const header = cell.column.Header.toLowerCase();
                const status = header === "status";
                const renderCell = cell.render("Cell");
                return (
                  <td
                    className={
                      isId
                        ? tableTdCss(isLastRow, true)
                        : tableTdCss(isLastRow, false)
                    }
                    {...cell.getCellProps()}
                    key={`${idx}.cell`}
                  >
                    {status ? (
                      <Badge
                        css={{}}
                        status={
                          renderCell === "Incomplete" ? "alert" : "success"
                        }
                        title={renderCell}
                      />
                    ) : (
                      renderCell
                    )}
                  </td>
                );
              })}
            </tr>
            {clickedId === testId[testId.length - 1] && isFlag && (
              <div className="flex ml-7 my-2 bg-slate-200 w-[62.9rem] h-30  border-solid border-2 border-indigo-300 rounded-lg">
                <TrackInnerTable />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export const renderItemTableBody = ({ rows, prepareRow }: any) => {
  return (
    <>
      {/* {rows.map((row, i:number) => { */}
      {rows.map((row: any, idx: number) => {
        prepareRow(row);
        const isLastRow = idx === rows.length - 1;
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell: any) => {
              const header = cell.column.Header.toLowerCase();
              const status = header === "status";
              const renderCell = cell.render("Cell");
              return (
                <td className={tableTdCss(isLastRow)} {...cell.getCellProps()}>
                  {status ? (
                    <Badge
                      css={{}}
                      status={renderCell === "Incomplete" ? "alert" : "success"}
                      title={renderCell}
                    />
                  ) : (
                    renderCell
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};
