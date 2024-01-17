/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlBar } from "../../../helpers/components/common/table/ControlBar";
import { useAppDispatch } from "../../../helpers/hooks/useStoreHooks";
import {
  setAddCategoryTrue,
  setAddItemTrue,
  setScannerCameraOpen,
  setSupplierAddTrue,
  // setTrackOrderTrue,
  // setTrackProductData,
  // setTrackProductId,
} from "../../../redux-app/inventory-module/InventorySlice";
import {
  TRACK_TABLE_DATA,
  TRACK_TABLE_MEMO,
} from "../../../helpers/components/common/table/TableConstants";
import { useMemo, useState } from "react";
import { addBtnControlbar } from "utils/methods/css";
import TrackTable from "../../../helpers/components/inventory-module/formmethods/view/TrackTable";
import { BiBarcodeReader, BiChevronDown } from "react-icons/bi";
import TrackDetailsForm from "helpers/components/inventory-module/formmethods/edit/TrackDetailsForm";

import CameraComponent from "helpers/components/common/scanners/BarCodeScanner";
// import TrackTable from "../../../helpers/components/inventory-module/formmethods/view/TrackTable";

const TrackProductPage = () => {
  const dispatch = useAppDispatch();
  const column = useMemo(() => TRACK_TABLE_MEMO, []);
  const data = useMemo(() => TRACK_TABLE_DATA, []);

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  const handleOpenCamera = () => {
    setOpenCamera(true);
    dispatch(setScannerCameraOpen(true));
  };
  // const getRoutes = (item: any) => ({
  //   handleViewAction: () => {
  //     navigate(`/profile/view/${item.id}`);
  //   },
  //   handleEditAction: () => {
  //     dispatch(setTrackOrderTrue(true));
  //     dispatch(setTrackProductId(item.id));
  //     dispatch(setTrackProductData(item));
  //     setIsEditFormOpen(true);
  //   },
  //   handleDeleteAction: () => {},
  // });

  const datas = data?.map((item: any) => ({
    ...item,
    icons: <BiChevronDown />,
  }));

  const viewItemTableProps = {
    columns: column[0].columns,
    data: datas,
  };
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
        <div
          className="flex h-auto w-full"
          onClick={() => setIsEditFormOpen(true)}
        >
          <TrackTable {...viewItemTableProps} />
        </div>
      </div>
      {isEditFormOpen && <TrackDetailsForm />}
    </>
  );
};

export default TrackProductPage;
