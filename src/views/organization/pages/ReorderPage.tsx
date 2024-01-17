/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import {
  REORDER_PRODUCT_TABLE_DATA,
  REORDER_PRODUCT_TABLE_MEMO,
} from "../../../helpers/components/common/table/TableConstants";
import { ReorderTable } from "../../../helpers/components/inventory-module/formmethods/view/ReorderTable";
import {
  useAppDispatch,
  // useAppSelector,
} from "../../../helpers/hooks/useStoreHooks";
import {
  setReorderProductId,
  setReorderViewData,
  setReorderViewTrue,
  setTrackOrderTrue,
  setTrackProductData,
  setTrackProductId,
} from "../../../redux-app/inventory-module/InventorySlice";
import TableActions from "../../../helpers/components/common/table/TableActions";
import ReorderViewForm from "../../../helpers/components/inventory-module/formmethods/view/ReorderViewForm";

const ReorderPage = () => {
  const dispatch = useAppDispatch();
  const columns = useMemo(() => REORDER_PRODUCT_TABLE_MEMO, []);
  const data = useMemo(() => REORDER_PRODUCT_TABLE_DATA, []);

  // const { details } = useAppSelector(
  //   (state) => state.Inventory.inventory.item.view.response
  // );

  // const { items } = details;
  const getRoutes = (item: any) => ({
    handleViewAction: () => {
      dispatch(setReorderViewData(item));
      dispatch(setReorderViewTrue(true));
      dispatch(setReorderProductId(item.id));
    },
    handleDeleteAction: () => {},
    handleEditAction: () => {
      dispatch(setTrackOrderTrue(true));
      dispatch(setTrackProductId(item.id));
      dispatch(setTrackProductData(item));
    },
  });

  const datas = data?.map((item: any) => ({
    ...item,
    action: <TableActions {...getRoutes(item)} />,
  }));

  const ReorderTableProps = {
    columns: columns[0].columns,
    data: datas,
    // data: how to pass the data from the Api endPoint into the data of table,
  };

  return (
    <>
      <ReorderViewForm />
      <ReorderTable {...ReorderTableProps} />
    </>
  );
};

export default ReorderPage;
