/* eslint-disable @typescript-eslint/no-explicit-any */
import TableActions from "helpers/components/common/table/TableActions";
import { SUPPLIER_TABLE_MEMO } from "helpers/components/common/table/TableConstants";
import SupplierTable from "helpers/components/inventory-module/formmethods/view/SupplierTable";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { useEffect, useMemo } from "react";
import {
  GetAllSupplierThunk,
  setEditItemId,
  setSupplierEditTrue,
} from "redux-app/inventory-module/InventorySlice";
import { RootState } from "redux-app/store";
import AddSupplierDetails from "helpers/components/inventory-module/formmethods/add/AddSupplierDetails";

const SupplierPage = () => {
  const dispatch = useAppDispatch();
  const columns = useMemo(() => SUPPLIER_TABLE_MEMO, []);
  const { isSuccess } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.supplier.view.response
  );
  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.supplier.view.response
  );

  // Fetch data when the component mounts
  useEffect(() => {
    dispatch(GetAllSupplierThunk(1));
  }, [dispatch, isSuccess]);

  const getRoutes = (item: any) => ({
    handleViewAction: () => {
      // dispatch(setReorderViewData(item));
      // dispatch(setReorderViewTrue(true));
      // dispatch(setReorderProductId(item.id));
    },
    handleDeleteAction: () => {},
    handleEditAction: () => {
      dispatch(setEditItemId(item));
      dispatch(setSupplierEditTrue(true));
      // dispatch(setTrackProductId(item.id));
      // dispatch(setTrackProductData(item));
    },
  });
  const datas = details?.map((item: any) => ({
    ...item,
    actions: <TableActions {...getRoutes(item.id)} />,
  }));
  const supplierTableProps = {
    column: columns[0].columns,
    data: datas,
  };
  return (
    <>
      <SupplierTable columns={columns[0].columns} {...supplierTableProps} />
      <AddSupplierDetails />
    </>
  );
};

export default SupplierPage;
