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
import React, { useMemo } from "react";

const TrackInnerTable = () => {
  const data = useMemo(() => TRACK_PRODUCT_TABLE_DATA, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Recieved By</th>
          <th>Conatct</th>
          <th>Location</th>
          <th>Recieved Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.contact}</td>
            <td>{item.location}</td>
            <td>{item.recieved_date}</td>
            <td>{item.status}</td>

            <td>
              <button>View</button>
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
