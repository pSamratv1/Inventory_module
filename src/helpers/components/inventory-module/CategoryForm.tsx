/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";
import { setAddCategoryDetailsTrue } from "../../../redux-app/inventory-module/InventorySlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { Button, TextInput } from "../common";

import {
  addCatgeoryBtnProps,
  addCatgeoryDetailsBtnProps,
  commonActions,
} from "./formProps";
import { FormCateoryDetailData } from "./formmethods/add/AddCategoryDetailForm";

const CategoryForm = ({ formObj, form }: any) => {
  const dispatch = useAppDispatch();
  // Props
  const { dynamic_attr }: any = useAppSelector(
    (state) => state.Inventory.platform.category._add_CategoryForm.input
  );

  // Ref Variable
  const formRef = useRef<HTMLDivElement>(null);
  // Destucuring Props
  const { handleSubmit, onCategorySubmit } = form;

  // Redux

  // Redux variables

  // Validation
  // Hooks
  useEffect(() => {
    // Function to handle clicks outside the form container
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        // Clicked outside the form container
        dispatch(setAddCategoryDetailsTrue(false));
      } else {
        // Clicked inside the form container
        dispatch(setAddCategoryDetailsTrue(false));
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={formRef}>
      <form
        onSubmit={handleSubmit(onCategorySubmit)}
        className="flex flex-col gap-4 mt-8 mb-[32  px]"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 min-w-[160px] justify-items-start">
            <TextInput {...formObj.item_category} />
          </div>
          <div className="col-span-6  min-w-[160px] justify-items-start">
            <TextInput {...formObj.item_subCategory} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {dynamic_attr &&
            dynamic_attr.map((item: FormCateoryDetailData) => {
              return (
                <div
                  className="col-span-6 min-w-[160px] justify-items-start"
                  key={item.category_label_id}
                >
                  {item && item.category_label && (
                    <TextInput
                      common={{
                        input: `${item.category_label_id}_input`,
                        label: item.category_label,
                      }}
                      actions={commonActions || {}}
                      css={{}}
                      form={{
                        register: form.register,
                        errors: form.errors,
                      }}
                    />
                  )}
                </div>
              );
            })}
        </div>

        <div className="flex mt-4 w-full justify-start">
          <Button
            {...addCatgeoryDetailsBtnProps(() =>
              dispatch(setAddCategoryDetailsTrue(true))
            )}
          />
        </div>
        <div className="flex mt-4 w-full justify-start">
          <Button {...addCatgeoryBtnProps} />
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
