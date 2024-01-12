/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, SelectInput, TextInput } from "../common";
import DateInput from "../common/forms/DateInput";
import { addItemBtnProps } from "./formProps";

const ItemForm = ({ formObj, form }: any) => {
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
          <SelectInput {...formObj.item_category} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 ">
        <div className="grid grid-cols-12 col-span-6  min-w-[160px] md:w-full sm:w-[14.5rem] justify-items-start ">
          <TextInput {...formObj.item_quantity.value} />
          <SelectInput {...formObj.item_quantity.unit} />
        </div>
        <div className="grid grid-cols-12 col-span-6  w-[160px] md:w-full sm:w-full justify-items-start">
          <TextInput {...formObj.item_price.value} />
          <SelectInput {...formObj.item_price.unit} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4">
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <DateInput {...formObj.item_date.purchase_date} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <DateInput {...formObj.item_date.expiry_date} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 justify-center">
          <SelectInput {...formObj.supplier_name} />
        </div>
      </div>
      <div className="flex mt-4 w-full justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
};

export default ItemForm;
