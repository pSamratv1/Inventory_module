import { useQuery } from "react-query";
import { GetAllTrackThunk } from "redux-app/inventory-module/InventorySlice";

export const useTrackData = (id: number) => {
   console.log(id,"id)
  return useQuery(["trackData", id], () => GetAllTrackThunk(id));
 
};
