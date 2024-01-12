/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, TextInput } from "../common";
import { addItemBtnProps } from "./formProps";

const ReorderForm = ({ formObj, form }: any) => {
  // Props

  // Destucuring Props
  const { handleSubmit, onSubmit } = form;

  // Redux

  // Redux variables

  console.log(formObj.item_name.common.defaultValue, "formObj");
  // Validation
  // Hooks
  // Methods

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8 "
    >
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-6 min-w-[160px] justify-items-start">
          <TextInput {...formObj.item_name} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.item_on_hand} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 ">
        <div className=" col-span-6  min-w-[160px] md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.item_reorder_date} />
        </div>
        <div className=" col-span-6  w-[160px] md:w-full sm:w-full justify-items-start">
          <TextInput {...formObj.item_expiry_date} />
        </div>
      </div>

      <div className="flex mt-4 w-full justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
};

export default ReorderForm;
