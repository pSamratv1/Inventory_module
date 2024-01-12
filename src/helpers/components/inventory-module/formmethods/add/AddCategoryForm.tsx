/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CenterSection,
  CloseIconButton,
  TextInput,
} from "../../../common";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AddCategoryFormValidation,
  addCatgeoryBtnProps,
  addCatgeoryDetailsBtnProps,
  categoryProps,
  commonActions,
  subCategoryProps,
} from "../../formProps";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import {
  setAddCategoryDetailsTrue,
  setAddCategoryTrue,
} from "../../../../../redux-app/inventory-module/InventorySlice";
import { useRef } from "react";
import AddCategoryDetailForm, {
  FormCateoryDetailData,
} from "./AddCategoryDetailForm";

interface FormCateoryData {
  item_category: string;
  item_subCategory: string;
}
// import { transformOptionsInObj } from "utils/methods/stringMethods";
export default function AddCategoryForm() {
  // Destucuring Props
  const formRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { isFlag } = useAppSelector(
    (state) => state.Inventory.inventory.category.category.add
  );

  // // Redux

  const { dynamic_attr }: any = useAppSelector(
    (state) => state.Inventory.platform.category._add_CategoryForm.input
  );

  // validations
  const validationSchema: any = AddCategoryFormValidation();

  // react-hook-form for the first form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormCateoryData>({
    resolver: yupResolver(validationSchema),
  });

  const form: any = {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  };

  const remaining = { actions: commonActions, form, css: {} };

  // Redux variables

  // Form Object for add
  const formObj: any = {
    item_category: {
      common: categoryProps({}),
      ...remaining,
    },
    item_subCategory: {
      common: subCategoryProps({}),
      ...remaining,
    },
  };

  // Normal Hooks
  const handleCloseAction = () => {
    dispatch(setAddCategoryTrue(false));
  };

  //  OnSubmit Handler
  const onCategorySubmit: SubmitHandler<FormCateoryData> = (data) => {
    const newData = { ...data, dynamic_attr };
    console.log(newData, "newData");
  };
  // UseEffect Hooks

  const handleDetailPopup = () => {
    alert("clicked on the DetailPopUp Button");
    dispatch(setAddCategoryDetailsTrue(true));
  };

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "z-[108] absolute flex top-0 left-0 w-full h-full bg-black/10 ",
          }}
        >
          <div
            className="z-[101] h-auto w-[calc(55vw+6rem)] sm:min-w-[350px] sm:max-w-[600px]  pb-1 bg-white text-xs rounded-md px-6 py-8"
            ref={formRef}
          >
            <p className="text-base text-primary-medium font-medium text-blue">
              Add Category
            </p>
            <div>
              <form
                onSubmit={handleSubmit(onCategorySubmit)}
                className="flex flex-col gap-4 mt-8 mb-[32px]"
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
                      console.log(item, "item");
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
                  <Button {...addCatgeoryDetailsBtnProps(handleDetailPopup)} />
                </div>
                <div className="flex mt-4 w-full justify-start">
                  <Button {...addCatgeoryBtnProps} />
                </div>
              </form>
            </div>
          </div>
          <CloseIconButton css={{}} handleAction={handleCloseAction} />
        </CenterSection>
      )}
      <AddCategoryDetailForm />
    </>
  );
}
