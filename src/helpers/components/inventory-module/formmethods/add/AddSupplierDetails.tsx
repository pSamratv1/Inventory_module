/* eslint-disable @typescript-eslint/no-explicit-any */

import { RootState } from "../../../../../redux-app/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import { CenterSection, CloseIconButton } from "../../../common";

import {
  AddSupplierThunk,
  setSupplierAddTrue,
} from "../../../../../redux-app/inventory-module/InventorySlice";
import AddCategoryForm from "./AddCategoryForm";
import SupplierForm from "../../SupplierForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SupplierValidation,
  commonActions,
  supplierProps,
  supplierEmailProps,
  supplierContactProps,
  supplierLocationProps,
} from "../../formProps";

interface FormData {
  // item_name: string;
  supplier_name: string;
  supplier_email: string;
  supplier_contact: string;
  supplier_address: string;
}
// import { transformOptionsInObj } from "utils/methods/stringMethods";
export default function AddSupplierDetails() {
  //  Redux
  const dispatch = useAppDispatch();

  // form Submit handler for add
  // OnSubmit handler
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    // Ensure item_date is defined and has purchase_date and expiry_date properties
    const {
      supplier_name,
      supplier_email,
      supplier_contact,
      supplier_address,
      ...restData
    } = data;

    // Combine restData with itemDate
    const updatedData = {
      ...restData,
      organization_id: 1,
      supplier_name: supplier_name,
      supplier_email: supplier_email,
      supplier_contact: supplier_contact,
      supplier_address: supplier_address,
    };
    console.log(updatedData, "updatedDatadsdfsfsef");

    dispatch(AddSupplierThunk(updatedData));
    //
    // Now, updatedData contains the original data excluding
    reset();
    dispatch(setSupplierAddTrue(false));
  };

  // Redux variables
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.supplier.add
  );

  const validationSchema: any = SupplierValidation();

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });
  // Redux variables
  const form = {
    register,
    handleSubmit,
    onSubmit: onSubmit,
    errors,
    setValue,
    getValues,
  };
  const remaining = { actions: commonActions, form, css: {} };
  // Form Object for add
  const formObj: any = {
    supplier_name: {
      common: supplierProps({}),
      ...remaining,
    },
    supplier_email: {
      common: supplierEmailProps({}),
      ...remaining,
    },

    supplier_contact: {
      common: supplierContactProps({}),
      ...remaining,
    },
    supplier_address: {
      common: supplierLocationProps({}),
      ...remaining,
    },
  };

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
            <SupplierForm formObj={formObj} form={form} />
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
