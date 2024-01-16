/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlBar } from "../../../helpers/components/common/table/ControlBar";
import { useAppDispatch } from "../../../helpers/hooks/useStoreHooks";
import {
  setAddCategoryTrue,
  setAddItemTrue,
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
import BarcodeScannerComponent from "helpers/components/common/scanners/BarCodeScanner";
// import TrackTable from "../../../helpers/components/inventory-module/formmethods/view/TrackTable";

const TrackProductPage = () => {
  const dispatch = useAppDispatch();
  const column = useMemo(() => TRACK_TABLE_MEMO, []);
  const data = useMemo(() => TRACK_TABLE_DATA, []);
  const [barCodedata, setBarCodedata] = useState("Not Found");
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);

  const handleOpenCamera = () => {
    alert("Opening camera");
    setOpenCamera(true);
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
      <div>
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-12 flex ">
            <ControlBar {...controlbarProps} />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-8">
          <div
            className="flex h-auto w-full"
            onClick={() => setIsEditFormOpen(true)}
          >
            <TrackTable {...viewItemTableProps} />
          </div>
        </div>
        {openCamera && (
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setBarCodedata(result.getText());
              else setBarCodedata("Not Found");
            }}
          />
        )}
        {isEditFormOpen && <TrackDetailsForm />}
      </div>
    </>
  );
};

export default TrackProductPage;
