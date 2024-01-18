/* eslint-disable @typescript-eslint/no-explicit-any */
import TableActions from "helpers/components/common/table/TableActions";
import { SUPPLIER_TABLE_MEMO } from "helpers/components/common/table/TableConstants";
import SupplierTable from "helpers/components/inventory-module/formmethods/view/SupplierTable";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";
import { useMemo } from "react";
import {
  setReorderViewData,
  setReorderViewTrue,
  setReorderProductId,
  setTrackOrderTrue,
  setTrackProductId,
  setTrackProductData,
} from "redux-app/inventory-module/InventorySlice";

const SupplierPage = () => {
  const dispatch = useAppDispatch();
  const columns = useMemo(() => SUPPLIER_TABLE_MEMO, []);
  const data = [
    {
      id: 1,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 2,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 3,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 4,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 5,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 6,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 7,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thaliba",
    },
    {
      id: 8,
      supplier_name: "Samrat Pahari",
      contact: "9867373778",
      email: "samratpahari@gmail.com",
      address: "Thalib",
    },
  ];
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
    actions: <TableActions {...getRoutes(item.id)} />,
  }));
  const supplierTableProps = {
    column: columns[0].columns,
    data: datas,
  };
  return <SupplierTable columns={columns[0].columns} {...supplierTableProps} />;
};

export default SupplierPage;
