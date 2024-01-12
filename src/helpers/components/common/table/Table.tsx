import { CommonTableSchema } from "./TableSchema";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Table(props: CommonTableSchema) {
  // Props
  const {
    currentTable,
    getTableProps,
    getTableBodyProps,
    renderHead,
    renderBody,
  } = props;
  return (
    <div className="w-full flex-1 max-h-[calc(100vh-60px-52px)] scrollbar scrollbar-mt-52px overflow-y-scroll">
      <table
        ref={currentTable}
        className="w-full table-fixed"
        {...getTableProps()}
      >
        <thead
          style={{
            color: "#fffff",
            fontSize: "20px",
          }}
          className="sticky text-left top-0 w-full bg-secondary-200 text-secondary-800 text-[20px]"
        >
          {renderHead}
        </thead>
        <tbody {...getTableBodyProps()}>{renderBody}</tbody>
      </table>
    </div>
  );
}
