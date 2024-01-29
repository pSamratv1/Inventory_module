/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { REORDER_PRODUCT_TABLE_MEMO } from "../../../helpers/components/common/table/TableConstants";
import { ReorderTable } from "../../../helpers/components/inventory-module/formmethods/view/ReorderTable";
import {
  useAppDispatch,
  useAppSelector,
  // useAppSelector,
} from "../../../helpers/hooks/useStoreHooks";
import {
  setReorderProductId,
  setReorderViewData,
  setReorderViewTrue,
} from "../../../redux-app/inventory-module/InventorySlice";
import TableActions from "../../../helpers/components/common/table/TableActions";
import ReorderViewForm from "../../../helpers/components/inventory-module/formmethods/view/ReorderViewForm";
import { RootState } from "redux-app/store";
import { Data } from "./ItemPage";

const ReorderPage = () => {
  const dispatch = useAppDispatch();
  const columns = useMemo(() => REORDER_PRODUCT_TABLE_MEMO, []);
  const data: Data =
    useAppSelector(
      (state: RootState) =>
        state.Inventory.inventory.reorder.view.response.details.data
    ) || [];

  // const { details } = useAppSelector(
  //   (state) => state.Inventory.inventory.item.view.response
  // );
  console.log(data, "data");
  // const { items } = details;
  const getRoutes = (item: any) => ({
    handleViewAction: () => {},
    handleDeleteAction: () => {},
    handleEditAction: () => {
      dispatch(setReorderViewData(item));
      dispatch(setReorderViewTrue(true));
      dispatch(setReorderProductId(item.id));
    },
  });

  // Filter the array based on the presence of reorder_quantity
  const filteredArray = data.filter(
    (item: Data) => item.reorder_quantity !== null
  );
  console.log(filteredArray, "filteredArray");

  const updatedData = filteredArray?.map((item: Data) => ({
    ...item,
    action: <TableActions {...getRoutes(item)} />,
  }));

  // action: <TableActions {...getRoutes(item)} />,

  const ReorderTableProps = {
    columns: columns[0].columns,
    data: updatedData,
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
