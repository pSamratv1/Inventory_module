import { useQuery } from "react-query";
import { GetAllSupplierThunk } from "redux-app/inventory-module/InventorySlice";
import { useAppDispatch } from "./useStoreHooks";

export const useFetchSupplierData = (id: number) => {
  const dispatch = useAppDispatch();
  return useQuery(["supplierData", id], () =>
    dispatch(GetAllSupplierThunk(id))
  );
};
