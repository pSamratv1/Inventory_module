/* eslint-disable @typescript-eslint/no-explicit-any */

import AddItemForm from "../../../helpers/components/inventory-module/formmethods/add/AddItemForm";
import { useMemo } from "react";
import { INVENTORY_TABLE_MEMO } from "../../../helpers/components/common/table/TableConstants";
import TableActions from "../../../helpers/components/common/table/TableActions";
import { ViewItemTable } from "./ViewItemTable";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/useStoreHooks";
import {
  setEditItemId,
  setEditItemTrue,
  setReorderId,
  setReorderAddTrue,
  setItemDeleteTrue,
  setDeleteItemId,
} from "../../../redux-app/inventory-module/InventorySlice";
import EditItemForm from "../../../helpers/components/inventory-module/formmethods/edit/EditItemForm";
import { RootState } from "../../../redux-app/store";
import SettingInvPage from "../../../helpers/components/inventory-module/formmethods/edit/SettingInvPage";
import DeleteItemForm from "../../../helpers/components/inventory-module/formmethods/delete/DeleteItemForm";
import AddSupplierDetails from "helpers/components/inventory-module/formmethods/add/AddSupplierDetails";

const ItemPage = () => {
  const dispatch = useAppDispatch();

  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.view.response
  );
  const data = details?.items?.length ? details?.items : [];

  // Hooks
  // Fetch data when the component mounts

  const columns = useMemo(() => INVENTORY_TABLE_MEMO, []);
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

  // console.log(datas, "anotherData");
  const viewItemTableProps = { columns, data: datas };
  // console.log("INVENTORY_TABLE_MEMO:", INVENTORY_TABLE_MEMO);
  // console.log("columns:", columns);

  return (
    <>
      <AddItemForm />
      <EditItemForm />
      <SettingInvPage />
      <DeleteItemForm />
      <AddSupplierDetails />
      <ViewItemTable {...viewItemTableProps} />
    </>
  );
};

export default ItemPage;
