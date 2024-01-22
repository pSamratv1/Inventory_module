import { useQuery } from "react-query";
import { GetAllTrackThunk } from "redux-app/inventory-module/InventorySlice";
import { useAppDispatch } from "./useStoreHooks";

export const useTrackData = (id: number) => {
  const dispatch = useAppDispatch();
  return useQuery(["trackData", id], () => dispatch(GetAllTrackThunk(id)));
};
