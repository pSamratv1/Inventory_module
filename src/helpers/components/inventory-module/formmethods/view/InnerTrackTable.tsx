/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TableActions from "helpers/components/common/table/TableActions";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";

import {
  setReorderId,
  setReorderAddTrue,
  setEditItemId,
  setEditItemTrue,
  setItemDeleteTrue,
  setDeleteItemId,
} from "redux-app/inventory-module/InventorySlice";

const InnerTrackTable = () => {
  const dispatch = useAppDispatch();

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

export default InnerTrackTable;
