/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup";
// import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { CenterSection, CloseIconButton } from "../../../common";
import ReorderForm from "../../ReorderForm";
import {
  commonActions,
  nameProps,
  itemOnHandProps,
  itemExpiryDateProps,
  ReOrderEditFormValidation,
  reOrderQuantityProps,
} from "../../formProps";
import AddCategoryForm from "../add/AddCategoryForm";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import { setReorderViewTrue } from "../../../../../redux-app/inventory-module/InventorySlice";
import { RootState } from "../../../../../redux-app/store";
import { useEffect, useState } from "react";

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
const ReorderEditForm = ({ id }: any) => {
  // UseState
  const [formObj, setFormObj] = useState({});
  // Redux variables
  const dispatch = useAppDispatch();
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.reorder.view
  );
  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.reorder.view.response
  );

  // Fetch The data from the details
  const fetchItems = (id: any) => {
    const filteredData = details?.data?.find((item: any) => item.id === id);
    return filteredData;
  };

  // OnSubmit handler
  const onSubmit = (data: FormData) => {
    console.log(data, "formData Data");
    // // Extract purchase_date and expiry_date from data
    // const {
    //   item_name,
    //   on_hand,
    //   reorder_date,
    //   expiry_date,
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
  const validationSchema: any = ReOrderEditFormValidation();

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

  // Fetch items from the response details (using redux / api)
  const editDataArray = fetchItems(id);
  // Getting the default value from the editDataArray
  console.log(editDataArray);
  // useEffect to set up formObj when editDataArray changes
  useEffect(() => {
    if (editDataArray) {
      const formObj = {
        item_name: {
          common: nameProps({
            defaultValue: editDataArray.item_name,
          }),
          ...remaining,
        },
        item_on_hand: {
          common: itemOnHandProps({
            defaultValue: editDataArray.quantity,
          }),
          ...remaining,
        },
        item_reorder_quantity: {
          common: reOrderQuantityProps({
            defaultValue: editDataArray.reorder_quantity,
          }),
          ...remaining,
        },
        item_expiry_date: {
          common: itemExpiryDateProps({
            defaultValue: editDataArray.expiry_date,
          }),
          ...remaining,
        },
      };
      setFormObj(formObj);
    }
  }, [editDataArray]);

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "z-[108] absolute flex top-0 left-0 w-full h-full items-center bg-black/10 ",
          }}
        >
          <div className="z-[101] w-[calc(50vw+10rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-19.4rem)] pb-1 bg-white text-xs rounded-md px-6 py-8 ">
            <p className="text-base text-primary-medium font-medium text-blue">
              Edit Reorder
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
};
export default ReorderEditForm;
