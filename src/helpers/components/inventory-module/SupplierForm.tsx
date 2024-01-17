/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextInput, Button } from "../common";
import {
  SupplierValidation,
  addItemBtnProps,
  commonActions,
  contactProps,
  emailProps,
  locationProps,
  supplierProps,
} from "./formProps";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";
import { AddSupplierThunk } from "redux-app/inventory-module/InventorySlice";

interface FormData {
  item_name: string;
  supplier_name: string;
  email: string;
  contact: string;
  address: string;
}
const SupplierForm = () => {
  // Props
  const dispatch = useAppDispatch();
  // Destucuring Props
  //   const { handleSubmit, onSubmit } = form;

  // Redux
  // validations
  const validationSchema: any = SupplierValidation();

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    // Ensure item_date is defined and has purchase_date and expiry_date properties
    // Extract purchase_date and expiry_date from data

    // Combine restData with date
    const updatedData = {
      organization_id: 1,
      supplier_name: data.supplier_name,
      supplier_email: data.email,
      supplier_contact: data.contact,
      supplier_address: data.address,
    };
    const supplierData = { updatedData, id: 1 };
    dispatch(AddSupplierThunk(supplierData));

    // Now, updatedData contains the original data excluding
    reset();
  };
  // Redux variables
  const form = {
    register,
    handleSubmit,
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
    email: {
      common: emailProps({}),
      ...remaining,
    },

    contact: {
      common: contactProps({}),
      ...remaining,
    },
    address: {
      common: locationProps({}),
      ...remaining,
    },
  };
  // Redux variables

  // Validation
  // Hooks
  // Methods
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8 "
    >
      <div className="grid grid-cols-12  sm:gap-4">
        {/* <div className="col-span-6 min-w-[160px] justify-items-start">
          <TextInput {...formObj.supplier_item_name} />
        </div> */}
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.supplier_name} />
        </div>
        <div className=" col-span-6  min-w-[160px] md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.email} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 ">
        <div className=" col-span-6  w-[160px] md:w-full sm:w-full justify-items-start">
          <TextInput {...formObj.contact} />
        </div>
        <div className="col-span-6  md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.address} />
        </div>
      </div>

      <div className="flex mt-4 w-full justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
};

export default SupplierForm;
