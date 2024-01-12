/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, SelectInput, TextInput } from "../common";
import DateInput from "../common/forms/DateInput";
import TimeInput from "../common/forms/TimeInput";
import { addItemBtnProps } from "./formProps";

const TrackProductForm = ({ formObj, form }: any) => {
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
          <TextInput {...formObj.recieved_by} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4 ">
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.contact} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.location} />
        </div>
      </div>
      <div className="grid grid-cols-12 sm:gap-4">
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <DateInput {...formObj.recieved_date} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TimeInput {...formObj.recieved_time} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 justify-center">
          <SelectInput {...formObj.status} />
        </div>
      </div>
      <div className="flex mt-4 w-full justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
};

export default TrackProductForm;
