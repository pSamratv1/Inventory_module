/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, SelectInput, TextInput } from "../common";

import { addCatgeoryBtnProps } from "./formProps";

const CategoryDetailForm = ({ formObj, form }: any) => {
  // Props

  // Destucuring Props
  const { handleSubmit, onDetailSubmit } = form;

  // Redux

  // Redux variables

  // Validation
  // Hooks

  return (
    <form
      onSubmit={handleSubmit(onDetailSubmit)}
      className="flex flex-col gap-4 mt-8 "
    >
      <div className="grid gap-4">
        <div className=" min-w-[160px] justify-items-start">
          <TextInput {...formObj.category_label} />
        </div>
        <div className=" min-w-[160px] justify-items-start">
          <SelectInput {...formObj.label_unit} />
        </div>
      </div>
      <div className="flex mt-4 w-full justify-start">
        <Button {...addCatgeoryBtnProps} />
      </div>
    </form>
  );
};

export default CategoryDetailForm;
