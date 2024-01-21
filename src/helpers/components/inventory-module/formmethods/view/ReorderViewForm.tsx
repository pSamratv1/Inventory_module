/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup";
// import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { CenterSection, CloseIconButton } from "../../../common";
import ReorderForm from "../../ReorderForm";
import {
  AddItemFormValidation,
  commonActions,
  nameProps,
  itemOnHandProps,
  reOrderDateProps,
  itemExpiryDateProps,
} from "../../formProps";
import AddCategoryForm from "../add/AddCategoryForm";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import { setReorderViewTrue } from "../../../../../redux-app/inventory-module/InventorySlice";
import { RootState } from "../../../../../redux-app/store";
import { useEffect } from "react";

interface FormData {
  item_name: string;
  item_category: string;
  quantity_unit: string;
  quantity_value: string;
  price_unit: string;
  price_value: string;
  purchase_date: string;
  expiry_date: string;
  supplier_name: string;
}
// import { transformOptionsInObj } from "utils/methods/stringMethods";
export default function ReorderViewForm() {
  //  Redux
  const dispatch = useAppDispatch();

  // OnSubmit handler
  const onSubmit = (data: FormData) => {
    // Ensure item_date is defined and has purchase_date and expiry_date properties
    console.log(data, "formData Data");
    // // Extract purchase_date and expiry_date from data
    // const {
    //   purchase_date,
    //   expiry_date,
    //   price_value,
    //   quantity_value,
    //   supplier_name,
    //   ...restData
    // } = data;

    // // Combine restData with itemDate
    // const updatedData = {
    //   ...restData,
    //   organization_id: 1,
    //   purchase_date: dayjs(purchase_date).format("YYYY-MM-DD"),
    //   expiry_date: dayjs(expiry_date).format("YYYY-MM-DD"),
    //   quantity: quantity_value,
    //   price: price_value,
    //   supplier: supplier_name,
    // };
    // dispatch(CreateInventoryThunk(updatedData));

    // Now, updatedData contains the original data excluding
    // console.log(updatedData, "updatedData");
    reset();
  };

  // validations
  const validationSchema: any = AddItemFormValidation();

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Redux variables
  const form = {
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    getValues,
  };
  const remaining = { actions: commonActions, form, css: {} };

  // Form Object for add

  // Redux variables
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.reorder.view
  );
  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.reorder.view.response
  );

  const { id } = useAppSelector(
    (state: RootState) => state.Inventory.platform.reorder._edit_ReorderForm
  );
  useEffect(() => {}, [id]);

  const formObj: any = {
    item_name: {
      common: nameProps({ defaultValue: details.item_name }),
      ...remaining,
    },
    item_on_hand: {
      common: itemOnHandProps({ defaultValue: details.item_name }),

      ...remaining,
    },
    item_reorder_date: {
      common: reOrderDateProps({ defaultValue: details.item_name }),
      ...remaining,
    },
    item_expiry_date: {
      common: itemExpiryDateProps({ defaultValue: details.item_name }),
      ...remaining,
    },
  };
  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "z-[108] absolute flex top-0 left-0 w-full h-full items-ce  nter bg-black/10 ",
          }}
        >
          <div className="z-[101] w-[calc(50vw+10rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-9.4rem)] pb-1 bg-white text-xs rounded-md px-6 py-8 ">
            <p className="text-base text-primary-medium font-medium text-blue">
              View Reorder
            </p>
            <ReorderForm formObj={formObj} form={form} />
          </div>
          <CloseIconButton
            css={{}}
            handleAction={() => {
              dispatch(setReorderViewTrue(false));
            }}
          />
        </CenterSection>
      )}
      <AddCategoryForm />
    </>
  );
}
