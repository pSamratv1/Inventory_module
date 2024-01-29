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
import { useState } from "react";
import { addBtnControlbar } from "utils/methods/css";

import { BiBarcodeReader } from "react-icons/bi";
import TrackDetailsForm from "helpers/components/inventory-module/formmethods/edit/TrackDetailsForm";

import CameraComponent from "helpers/components/common/scanners/BarCodeScanner";
import { RootState } from "redux-app/store";

// Create a custom hook using useQuery

const TrackProductPage = () => {
  const dispatch = useAppDispatch();

  const { details } =
    useAppSelector(
      (state: RootState) => state.Inventory.inventory.track.view.response
    ) || [];

  // const column = useMemo(() => TRACK_TABLE_MEMO, []);

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
  // const viewItemTableProps = {
  //   columns: column[0].columns,
  //   data: datas,
  // };

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

      <div className="flex flex-col gap-4 py-6">
        <div className="grid grid-cols-12 sticky text-left top-0 w-full h-12 bg-slate-200 text-slate-500 text-[14px] font-semibold justify-around items-center px-5 pr-11">
          <span className="col-span-4 flex justify-start">Item Name</span>
          <span className="col-span-4 flex justify-start">Supplied By</span>
          <span className="col-span-4 flex justify-start">Supplied Date</span>
        </div>
        <div
          className="flex flex-col h-auto w-full px-2"
          onClick={() => setIsEditFormOpen(true)}
        >
          {datas.map((item: any, idx: number) => (
            <div id="accordion-collapse" data-accordion="collapse" key={idx}>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span className="grid grid-cols-12 justify-between w-full">
                    <div className="col-span-4 flex justify-start">
                      {item.item_name}
                    </div>
                    <div className="col-span-4 flex justify-start">
                      {item.supplied_by}
                    </div>
                    <div className="col-span-4 flex justify-start">
                      {item.items[0].supplied_date}
                    </div>
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{" "}
                    <a
                      href="/docs/getting-started/introduction/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      get started
                    </a>{" "}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isEditFormOpen && <TrackDetailsForm />}
    </>
  );
};

export default TrackProductPage;
