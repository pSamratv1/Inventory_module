/* eslint-disable @typescript-eslint/no-explicit-any */

import { TextInput, Button } from "../common";
import { addItemBtnProps } from "./formProps";

const SupplierForm = ({ formObj, form }: any) => {
  // const dispatch = useAppDispatch();
  // Props
  // Destucuring Props
  const { handleSubmit, onSubmit } = form;

  // Redux
  // validations

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
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.supplier_name} />
        </div>
        <div className=" col-span-6  min-w-[160px] md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.supplier_email} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 ">
        <div className=" col-span-6  w-[160px] md:w-full sm:w-full justify-items-start">
          <TextInput {...formObj.supplier_contact} />
        </div>
        <div className="col-span-6  md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.supplier_address} />
        </div>
      </div>

      <div className="flex mt-4 w-full justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
};

export default SupplierForm;
