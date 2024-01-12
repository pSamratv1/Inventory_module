/* eslint-disable @typescript-eslint/no-explicit-any */

import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  CenterSection,
  CloseIconButton,
  SelectInput,
  TextInput,
} from "../../../common";
import {
  AddCategoryDetailFormValidation,
  addCatgeoryBtnProps,
  categoryDetailProps,
  categoryDetailUnitProps,
  commonActions,
} from "../../formProps";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import { setAddCategoryDetailsTrue } from "../../../../../redux-app/inventory-module/InventorySlice";
import { RootState } from "../../../../../redux-app/store";

interface FormCateoryDetail {
  category_detail: string;
  label_unit: string;
}
export interface FormCateoryDetailData {
  category_label_id: number;
  category_label: string;
  label_unit: string;
}

export default function AddCategoryDetailForm() {
  // Redux
  const dispatch = useAppDispatch();

  // Redux variables
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.category.detail.add
  );

  // State
  const [counter, setCounter] = useState(1);
  const [updatedData, setUpdatedData] = useState<FormCateoryDetailData[]>([]);

  const onDetailSubmit: SubmitHandler<FormCateoryDetail> = (data) => {
    const newDetail: FormCateoryDetailData = {
      category_label_id: counter,
      category_label: data.category_detail,
      label_unit: data.label_unit,
    };

    const newUpdatedData = [...updatedData, newDetail];
    setUpdatedData(newUpdatedData);
    setCounter(counter + 1);
    dispatch(setAddCategoryDetailsTrue(false));
    // Move the state updates inside a useEffect hook

    // Form reset
    reset();
  };
  // useEffect(() => {
  //   dispatch(setAddSubCategoryName(updatedData));
  // }, [updatedData, dispatch]);

  // dispatch hooks

  // validation
  const validationSchema: any = AddCategoryDetailFormValidation();

  // react-hook-form for the first form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    getValues,
  } = useForm<FormCateoryDetail>({
    resolver: yupResolver(validationSchema),
  });

  const form = {
    register,
    handleSubmit,
    errors,
    onDetailSubmit,
    setValue,

    getValues,
  };

  const remaining = { actions: commonActions, form, css: {} };

  // Form Object for add
  const formDetailObj: any = {
    category_label_id: 1,
    category_label: {
      common: categoryDetailProps({}),
      ...remaining,
    },
    label_unit: {
      common: categoryDetailUnitProps({}),
      options: [
        { label: "Kg", value: "Kilogram" },
        { label: "Gm", value: "Gram" },
        { label: "Lt", value: "Liter" },
        { label: "mL", value: "MiliLiter" },
        { label: "Pcs", value: "Pieces" },
        { label: "Mt", value: "Meter" },
        { label: "Cm", value: "Centimeter" },
      ],
      ...remaining,
    },
  };

  const handleClose = () => {
    dispatch(setAddCategoryDetailsTrue(false));
  };

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "z-[110] absolute flex top-0 left-0 w-full h-full bg-black/10 ",
          }}
        >
          <div className="z-[101]  w-[calc(55vw-25rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-20rem)] pb-1 bg-white text-xs rounded-md px-6 py-8">
            <p className="text-base text-primary-medium font-medium text-blue">
              Add Detail
            </p>
            <form
              onSubmit={handleSubmit(onDetailSubmit)}
              className="flex flex-col gap-4 mt-8 "
            >
              <div className="grid gap-4">
                <div className=" min-w-[160px] justify-items-start">
                  <TextInput {...formDetailObj.category_label} />
                </div>
                <div className=" min-w-[160px] justify-items-start">
                  <SelectInput {...formDetailObj.label_unit} />
                </div>
              </div>
              <div className="flex mt-2 w-full justify-start">
                <Button {...addCatgeoryBtnProps} />
              </div>
            </form>
          </div>
          <CloseIconButton css={{}} handleAction={handleClose} />
        </CenterSection>
      )}
    </>
  );
}
