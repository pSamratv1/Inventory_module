// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Table from "helpers/components/common/table/Table";
// import TableActions from "helpers/components/common/table/TableActions";
// import {
//   TRACK_PRODUCT_TABLE_DATA,
//   TRACK_PRODUCT_TABLE_MEMO,
// } from "helpers/components/common/table/TableConstants";
// import { useAppDispatch } from "helpers/hooks/useStoreHooks";
// import React, { useMemo, useRef } from "react";
// import { useNavigate } from "react-router";
// import { useFilters, useSortBy, useTable } from "react-table";
// // import { useFilters, useSortBy, useTable } from "react-table";
// import {
//   setTrackOrderTrue,
//   setTrackProductId,
//   setTrackProductData,
// } from "redux-app/inventory-module/InventorySlice";
// import {
//   renderItemTableBody,
//   renderItemTableHead,
// } from "utils/methods/itemProps";

// const TrackInnerTable = React.memo(() => {
//   //   const dispatch = useAppDispatch();
//   const column = useMemo(() => TRACK_PRODUCT_TABLE_MEMO, []);
//   const data = useMemo(() => TRACK_PRODUCT_TABLE_DATA, []);
//   const getRoutes = () => ({
//     handleViewAction: () => {},
//     handleEditAction: () => {
//       //   dispatch(setTrackOrderTrue(true));
//       //   dispatch(setTrackProductId(item.id));
//       //   dispatch(setTrackProductData(item));
//       //   setIsEditFormOpen(true);
//     },
//     handleDeleteAction: () => {},
//   });
//   const datas = data?.map((item: any) => ({
//     ...item,
//     action: <TableActions {...getRoutes()} />,
//   }));
//   // Ref
//   const currentTable = useRef<HTMLTableElement | null>(null);

//   // States
//   // const [filterInput, setFilterInput] = useState("");

//   // Use the state and functions returned from useTable to build your UI
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable(
//       {
//         columns: column[0]?.columns, // Corrected property name to 'columns'
//         data: datas!, // Corrected property name to 'data'
//       },
//       useSortBy
//     );

//   // Actions
//   const handleHeaderClick = (column: any) => {
//     alert(column.Header);
//   };

//   // // Table props
//   const tableProps = {
//     currentTable,
//     getTableProps,
//     getTableBodyProps,
//     renderHead: renderItemTableHead({
//       headerGroups,
//       handleHeaderClick,
//     }),
//     renderBody: renderItemTableBody({
//       rows,
//       prepareRow,
//     }),
//   };

//   return <Table {...tableProps} />;
// });

// export default TrackInnerTable;
import { TRACK_PRODUCT_TABLE_DATA } from "helpers/components/common/table/TableConstants";
import { useMemo } from "react";

const TrackInnerTable = () => {
  const data = useMemo(() => TRACK_PRODUCT_TABLE_DATA, []);
  return (
    <table>
      <thead className="">
        <tr className="">
          <th className="p-3 w-[11rem]">Conatct</th>
          <th className="p-3 w-[11rem]">Recieved By</th>
          <th className="p-3 w-[11rem]">Recieved Date</th>
          <th className="p-3 w-[11rem]">Location</th>
          <th className="p-3 w-[11rem]">Status</th>
          <th className="p-3 w-[11rem]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className="" key={item.id}>
            <td className="p-3 w-[11rem]">{item.id}</td>
            <td className="p-3 w-[11rem]">{item.contact}</td>
            <td className="p-3 w-[11rem]">{item.location}</td>
            <td className="p-3 w-[11rem]">{item.recieved_date}</td>
            <td className="p-3 w-[11rem]">{item.status}</td>

            <td className="flex h-[3rem] justify-center items-center gap-4">
              <button className="px-2 h-7">View</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrackInnerTable;
