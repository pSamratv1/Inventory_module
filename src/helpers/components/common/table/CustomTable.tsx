// import { Badge } from "helpers/components/common";
// import CustomImage from "helpers/components/common/images/CustomImage";

import { defaultThCss, tableThCss } from "../../../../utils/constants/table";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Table = (props: any) => {
  // Props
  const {
    currentTable,
    getTableProps,
    headerGroups,
    handleHeaderClick,
    getTableBodyProps,
    rows,
    prepareRow,
    // uploadFolder,
  } = props;

  return (
    <div className="w-full flex-1 max-h-[calc(100vh-60px-52px)] scrollbar scrollbar-mt-52px overflow-y-scroll">
      <table
        ref={currentTable}
        className="w-full table-fixed"
        {...getTableProps()}
      >
        <thead className="sticky top-0 w-full text-left bg-secondary-200 text-secondary-600">
          {headerGroups.map((headerGroup: any) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => {
                  const isId = column.Header === "Id";
                  return column.hideHeader === false ? null : (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`${
                        column.isSorted
                          ? column.isSortedDesc
                            ? "sort-desc p-7"
                            : "sort-asc p-7"
                          : tableThCss
                      } ${defaultThCss}`}
                      onClick={() => handleHeaderClick(column)}
                    >
                      {isId ? "ID" : column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
          })}
        </tbody>
      </table>
    </div>
  );
};
