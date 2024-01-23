/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { GetAllInventoryServicesThunk } from "../../../../redux-app/inventory-module/InventorySlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { RootState } from "../../../../redux-app/store";
import { Sidebar } from "./Sidebar";
import { useFetchTrackData } from "helpers/hooks/useFetchTrackData";

export default function CommonLayout() {
  const dispatch = useAppDispatch();

  const { isSuccess } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.add.response
  );
  const { data: trackData } = useFetchTrackData(1);

  // Fetch data when the component mounts
  useEffect(() => {
    dispatch(GetAllInventoryServicesThunk());
  }, [dispatch, isSuccess]);

  return (
    // Set the min width of the uoter most div to 25rem
    <div className="auth-layout h-screen w-full md:w-full  grid grid-rows-12 grid-cols-12 text-xs ">
      <header className="col-span-12 w-full h-[52px] border-b-[1px] border-primary-100 px-4 flex justify-between items-center bg-gray-200 gap-2">
        <span className="text-lg font-bold">Header Area</span> (Layouts - Header
        and Sidebar - implemented in auth-module using Module Federation)
      </header>
      <div className="flex h-[calc(100vh-52px)] w-screen">
        <Sidebar />
        <main className="flex-1 max-w-full max-h-screen overflow-y-scroll scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
