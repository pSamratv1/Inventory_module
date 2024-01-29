/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlBar } from "../../../helpers/components/common/table/ControlBar";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/useStoreHooks";
import {
  setAddCategoryTrue,
  setAddItemTrue,
  setScannerCameraOpen,
  setSupplierAddTrue,
  // setTrackOrderTrue,
  // setTrackProductData,
  // setTrackProductId,
} from "../../../redux-app/inventory-module/InventorySlice";
import { useMemo, useState } from "react";
import { addBtnControlbar } from "utils/methods/css";

import { BiBarcodeReader } from "react-icons/bi";
import TrackDetailsForm from "helpers/components/inventory-module/formmethods/edit/TrackDetailsForm";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import CameraComponent from "helpers/components/common/scanners/BarCodeScanner";
import { RootState } from "redux-app/store";
import TableActions from "helpers/components/common/table/TableActions";
import Table from "helpers/components/common/table/Table";
import InnerTrackTable from "helpers/components/inventory-module/formmethods/view/InnerTrackTable";
import { TRACK_TABLE_MEMO } from "helpers/components/common/table/TableConstants";
import TrackTable from "helpers/components/inventory-module/formmethods/view/TrackTable";
import { formatDate } from "utils/methods/stringMethods";

// Create a custom hook using useQuery

const TrackProductPage = () => {
  const dispatch = useAppDispatch();

  const { details } =
    useAppSelector(
      (state: RootState) => state.Inventory.inventory.track.view.response
    ) || [];

  const column = useMemo(() => TRACK_TABLE_MEMO, []);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  const handleOpenCamera = () => {
    setOpenCamera(true);
    dispatch(setScannerCameraOpen(true));
  };

  const datas = details?.data
    ? details.data.map((item: any) => ({ ...item }))
    : [];
  console.log(datas, "datas");
  const getRoutes = (id: number) => ({
    handleViewAction: () => {
      alert("handleViewAction");
    },
    handleEditAction: () => {
      alert("handleViewAction");
    },
    handleDeleteAction: () => {
      alert("handleDeleteAction");
    },
  });

  // if (datas && datas.items) {
  //   datas.items.forEach((item: any) => {
  //     item.actions = <TableActions {...getRoutes(item.id)} />;
  //   });
  // } else {
  //   console.error("Datas or datas.items is undefined or null.");
  // }
  const controlbarProps = {
    addCategoryBtnControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Add Category",
      handleAction: () => dispatch(setAddCategoryTrue(true)),
    },
    addItemBtnControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Add Item",
      handleAction: () => dispatch(setAddItemTrue(true)),
    },
    addSupplierBtnControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Add Supplier",
      handleAction: () => dispatch(setSupplierAddTrue(true)),
    },
    openCameraControlbar: {
      css: { customCss: addBtnControlbar },
      title: "Open Camera",
      icon: <BiBarcodeReader size={20} />,
      handleAction: () => handleOpenCamera(),
    },
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-12 flex ">
          <ControlBar {...controlbarProps} />
        </div>
      </div>
      {openCamera && <CameraComponent />}

      <div className="flex flex-col gap-4 py-2">
        <div className="grid grid-cols-12 sticky text-left top-0 w-full h-[52px] items-center bg-gray-100 px-6 text-primary-lighter text-xs font-bold z-50 ">
          <span
            className="col-span-4 flex justify-start pl-2 cursor-pointer"
            onClick={() => alert("Item Name")}
          >
            Item Name
          </span>
          <span
            className="col-span-4 flex justify-start pl-2 cursor-pointer"
            onClick={() => alert("Supplied By")}
          >
            Supplied By
          </span>
          <span
            className="col-span-4 flex justify-start pl-2 cursor-pointer"
            onClick={() => alert("Supplied Date")}
          >
            Supplied Date
          </span>
        </div>
        <div
          className="flex flex-col h-auto w-full px-2"
          onClick={() => setIsEditFormOpen(true)}
        >
          <Accordion className=" text-[14px] text-#fffff">
            {datas.map((item: any, idx: number) => (
              <AccordionItem key={idx} className="py-3">
                <AccordionItemButton>
                  <span className="grid grid-cols-12 justify-between items-center px-2 w-full h-12  font-medium rtl:text-right border  border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <div className="col-span-4 flex justify-start ">
                      {item.item_name}
                    </div>
                    <div className="col-span-4 flex justify-start">
                      {item.supplied_by}
                    </div>
                    <div className="col-span-4 flex justify-start">
                      {item.items[0].supplied_date}
                    </div>
                  </span>
                </AccordionItemButton>
                <AccordionItemPanel className="w-fit translate-x-[80px] border rounded-lg my-2">
                  <table className="rounded-lg">
                    <thead className="rounded-lg">
                      <tr className="text-[14px] rounded-lg  bg-gray-100 px-6 text-primary-lighter text-xs font-bold z-50 ">
                        <th className="p-3 w-[11rem]">Recieved By</th>
                        <th className="p-3 w-[11rem]">Recieved Date</th>
                        <th className="p-3 w-[11rem] ">Location</th>
                        <th className="p-3 w-[11rem]">Status</th>
                        <th className="p-3 w-[11rem]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item?.items?.map((item: any) => (
                        <tr className="" key={item.id}>
                          <td className=" w-[11rem] text-center h-[3rem] text-[13px] font-medium">
                            {item.received_by}
                          </td>

                          <td className="w-[11rem] h-[3rem] text-[13px] text-center font-medium">
                            {formatDate(item.received_date)}
                          </td>
                          <td className="  w-[11rem] h-[3rem] text-[13px] text-center font-medium">
                            {item.location}
                          </td>
                          <td className="flex w-[11rem] h-[4rem] text-[13px] items-center justify-center font-medium">
                            <div
                              className="flex  h-8 w-32 justify-center items-center rounded-lg text-white"
                              style={{
                                backgroundColor:
                                  item.status === "Pending"
                                    ? "#ff5252"
                                    : item.status === "Delivered"
                                    ? "#4FC646"
                                    : "transparent",
                              }}
                            >
                              {item.status}
                            </div>
                          </td>

                          <td className="h-[4rem] w-[] justify-center items-center gap-2 px-2 text-[13px] font-medium">
                            {item.actions}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {isEditFormOpen && <TrackDetailsForm />}
    </>
  );
};

export default TrackProductPage;
