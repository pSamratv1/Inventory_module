/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import {
  ReOrderFormValidation,
  commonActions,
  minReOrderProps,
  remainderDateProps,
  reoderQuantityProps,
} from "../../formProps";
import ReoderForm from "../add/ReorderForm";
import { useForm } from "react-hook-form";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import {
  AddReOrderThunk,
  GetAllInventoryServicesThunk,
  setReorderAddTrue,
} from "../../../../../redux-app/inventory-module/InventorySlice";
import dayjs from "dayjs";
import { CenterSection, CloseIconButton } from "../../../common";
import { RootState } from "../../../../../redux-app/store";

export interface ReOrderFormData {
  reoder_quantity: string;
  min_reorder_quantity: string;
  remainder_expiry_date: string;
}
const SettingInvPage = () => {
  // Redux Hooks
  const dispatch = useAppDispatch();
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.reorder.add
  );
  const { id } = useAppSelector(
    (state: RootState) => state.Inventory.platform.reorder._add_ReorderForm
  );
  //   onSubmit
  const onSubmit = async (data: ReOrderFormData) => {
    const { min_reorder_quantity, remainder_expiry_date, reoder_quantity } =
      data;
    // ... (rest of the onSubmit logic)
    const updatedData = {
      expiry_reminder: dayjs(remainder_expiry_date).format("YYYY-MM-DD"),
      reorder_quantity: parseFloat(reoder_quantity).toFixed(2),
      low_stock_reminder: min_reorder_quantity,
    };
    // Move reset() to the end
    console.log(updatedData, "updatedDta");
    try {
      // Dispatch the asynchronous action to update the data via API
      await dispatch(AddReOrderThunk({ updatedData, id }));
      // Reset the form using the reset function from react-hook-form
      // Close the edit form

      // Fetch the updated data from the API or redux store
      dispatch(GetAllInventoryServicesThunk());
    } catch (error) {
      // Handle API call error
      console.error("Error updating data:", error);
    }
    reset();
    dispatch(setReorderAddTrue(false));

    // Reset the form after processing the submit logic
  };
  // validations
  const validationSchema: any = ReOrderFormValidation();

  // react-hook-form for the first form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm<ReOrderFormData>({
    resolver: yupResolver(validationSchema),
  });

  // Define onSubmit inside otherFormMethods

  const form: any = {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
    setValue,
    getValues,
  };
  // handle on Close
  // handle Close
  const onHandleClose = () => {
    dispatch(setReorderAddTrue(false));
  };
  //   formObj
  const remaining = { actions: commonActions, css: {} };

  const formObj: any = {
    reoder_quantity: {
      common: reoderQuantityProps({}),
      form,
      ...remaining,
    },
    min_reorder_quantity: {
      common: minReOrderProps({}),
      form,
      ...remaining,
    },
    remainder_expiry_date: {
      common: remainderDateProps({}),
      form,
      ...remaining,
    },
  };

  return (
    <>
      <div>
        {isFlag && (
          <CenterSection
            css={{
              customCss:
                "z-[108] absolute flex top-0 left-0 w-full h-full items-center bg-black/10 ",
            }}
          >
            <div className="z-[101] w-[calc(50vw+10rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-9.4rem)] pb-1 bg-white text-xs rounded-md px-6 py-8 ">
              <p className="text-base text-primary-medium font-medium text-blue">
                Edit Item
              </p>
              <ReoderForm formObj={formObj} form={form} onSubmit={onSubmit} />
            </div>
            <CloseIconButton css={{}} handleAction={onHandleClose} />
          </CenterSection>
        )}
      </div>
    </>
  );
};

export default SettingInvPage;
