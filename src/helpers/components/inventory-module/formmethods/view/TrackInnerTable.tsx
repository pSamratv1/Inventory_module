/* eslint-disable @typescript-eslint/no-explicit-any */
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
import TableActions from "helpers/components/common/table/TableActions";
import { TRACK_PRODUCT_TABLE_DATA } from "helpers/components/common/table/TableConstants";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { useMemo } from "react";
import {
  setReorderId,
  setReorderAddTrue,
  setEditItemId,
  setEditItemTrue,
  setItemDeleteTrue,
  setDeleteItemId,
} from "redux-app/inventory-module/InventorySlice";
import { RootState } from "redux-app/store";

const TrackInnerTable = () => {
  const dispatch = useAppDispatch();
  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.track.view.response
  );
  const data = details.data.item;

  const getRoutes = (id: number) => ({
    handleViewAction: () => {
      dispatch(setReorderId(id));
      dispatch(setReorderAddTrue(true));
    },
    handleEditAction: () => {
      dispatch(setEditItemId(id));
      dispatch(setEditItemTrue(true));
    },
    handleDeleteAction: () => {
      dispatch(setItemDeleteTrue(true));
      dispatch(setDeleteItemId(id));
    },
  });
  const datas = data?.map((item: any) => ({
    ...item,
    actions: <TableActions {...getRoutes(item.id)} />,
  }));
  console.log(datas, "inside the inner table");
  return (
    <table className="">
      <thead className="">
        <tr className="text-[14px] text-slate-400">
          <th className="p-3 w-[11rem]">Conatct</th>
          <th className="p-3 w-[11rem]">Recieved By</th>
          <th className="p-3 w-[11rem]">Recieved Date</th>
          <th className="p-3 w-[11rem]">Location</th>
          <th className="p-3 w-[11rem]">Status</th>
          <th className="p-3 w-[11rem]">Actions</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((item) => (
          <tr className="" key={item.id}>
            <td className="p-3 w-[11rem] flex flex-row h-[4rem] justify-center items-center gap-2 px-6  text-[13px] ">
              {item.contact}
            </td>
            <td className="px-3 py-3 w-[11rem] text-center h-[3rem] text-[13px]">
              {item.recieved_by}
            </td>

            <td className="px-12 py-3 w-[11rem] h-[3rem] text-[13px]">
              {item.recieved_date}
            </td>
            <td className="px-12 py-3 w-[11rem] h-[3rem] text-[13px]">
              {item.location}
            </td>
            <td className="px-12 py-3 w-[11rem] h-[3rem] text-[13px]">
              {item.status}
            </td>

            <td className="flex h-[4rem] w-[] justify-center items-center gap-2 px-2 text-[13px]">
              {item.actions}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrackInnerTable;
