/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, TextInput } from "../../../common";
import DateInput from "../../../common/forms/DateInput";
import { addItemBtnProps } from "../../formProps";
import { useState } from "react";
import ReactSwitch from "react-switch";

export default function ReoderForm({ formObj, form, onSubmit }: any) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const handleChange1 = (val: boolean) => {
    setChecked1(val);
  };

  const handleChange2 = (val: boolean) => {
    setChecked2(val);
  };
  const { handleSubmit } = form;
  // React Switch should be replaced with custom toggle component
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 py-12 max-w-[60rem]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between px-2 items-center ">
          <div className="text-lg text-slate-600 justify-center">
            Automatic Reorder
          </div>
          <div className="flex justify-center">
            <ReactSwitch
              id="reactSwitch1"
              checked={checked1}
              onChange={() => handleChange1(!checked1)}
              height={20}
              width={48}
              onColor="#2693e6"
              onHandleColor="#2693e6"
              handleDiameter={28}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            />
          </div>
        </div>
        {checked1 && (
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-6">
              <TextInput {...formObj.reoder_quantity} />
            </div>
            <div className="col-span-6">
              <TextInput {...(formObj && formObj.min_reorder_quantity)} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between px-2 items-center ">
          <div className="text-lg text-slate-600 justify-center">
            Set Reminder of Expiry Item
          </div>
          <div className="flex justify-center">
            <ReactSwitch
              id="reactSwitch2"
              checked={checked2}
              onChange={() => handleChange2(!checked2)}
              height={20}
              width={48}
              size={20}
              onColor="#2693e6"
              onHandleColor="#2693e6"
              handleDiameter={28}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            />
          </div>
        </div>
        {checked2 && (
          <div className="grid grid-cols-12 max-w-[30rem]">
            <div className="col-span-12">
              <DateInput {...formObj.remainder_expiry_date} />
            </div>
          </div>
        )}
      </div>
      <div className="flex mt-4 w-fit justify-start">
        <Button {...addItemBtnProps} />
      </div>
    </form>
  );
}
