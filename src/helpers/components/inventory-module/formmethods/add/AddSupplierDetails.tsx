/* eslint-disable @typescript-eslint/no-explicit-any */

import { RootState } from "../../../../../redux-app/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import { CenterSection, CloseIconButton } from "../../../common";

import { setSupplierAddTrue } from "../../../../../redux-app/inventory-module/InventorySlice";
import AddCategoryForm from "./AddCategoryForm";
import SupplierForm from "../../SupplierForm";

// interface FormData {
//   item_name: string;
//   supplier_name: string;
//   email: string;
//   contact: string;
//   address: string;
// }
// import { transformOptionsInObj } from "utils/methods/stringMethods";
export default function AddSupplierDetails() {
  //  Redux
  const dispatch = useAppDispatch();

  // OnSubmit handler

  // Form Object for add

  // Redux variables
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.supplier.add
  );
  console.log(isFlag, "Is Flag for the supplier form");

  //   // Form Object for add
  //   const formObj: any = {
  //     supplier_item_name: {
  //       common: supplierItemProps({}),
  //       ...remaining,
  //     },
  //     supplier_name: {
  //       common: supplierProps({}),
  //       ...remaining,
  //     },
  //     email: {
  //       common: emailProps({}),
  //       ...remaining,
  //     },

  //     contact: {
  //       common: contactProps({}),
  //       ...remaining,
  //     },
  //     address: {
  //       common: locationProps({}),
  //       ...remaining,
  //     },
  //   };
  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "z-[108] absolute flex top-0 left-0 w-full h-full items-center bg-black/10 ",
          }}
        >
          <div className="z-[101] w-[calc(50vw+10rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-20rem)] pb-1 bg-white text-xs rounded-md px-6 py-8 ">
            <p className="text-base text-primary-medium font-medium text-blue">
              Add Supplier
            </p>
            <SupplierForm />
          </div>
          <CloseIconButton
            css={{}}
            handleAction={() => dispatch(setSupplierAddTrue(false))}
          />
        </CenterSection>
      )}
      <AddCategoryForm />
    </>
  );
}
