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
          <TextInput {...formObj.quantity} />
          <SelectInput {...formObj.quantity_unit} />
        </div>
        <div className="grid grid-cols-12 col-span-6  w-[160px] md:w-full sm:w-full justify-items-start">
          <TextInput {...formObj.price} />
          <SelectInput {...formObj.price_unit} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4">
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <DateInput {...formObj.purchase_date} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <DateInput {...formObj.expiry_date} />
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
