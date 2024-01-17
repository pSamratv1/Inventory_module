/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AddItemFormValidation,
  commonActions,
  contactProps,
  locationProps,
  nameProps,
  recievedDateProps,
  recievedbyProps,
  statusProps,
  timeProps,
} from "../../formProps";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setTrackOrderTrue } from "../../../../../redux-app/inventory-module/InventorySlice";
import { CenterSection, CloseIconButton } from "../../../common";
import { useEffect } from "react";
import TrackProductForm from "../../TrackProductForm";
import { RootState } from "../../../../../redux-app/store";

interface TrackFormData {
  item_name: string;
  recieved_by: string;
  contact: string;
  location: string;
  recieved_date: string;
  recieved_time: string;
  status: string;
}
// import { transformOptionsInObj } from "utils/methods/stringMethods";
const TrackDetailsForm = () => {
  // useState for the short popup
  //  Redux Variable
  const dispatch = useAppDispatch();

  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.platform.track._edit_TrackForm
  );
  // Check if details is an object
  // Ensure details has the correct structure based on TrackFormData

  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.track.edit
  );

  // Fetch items from the response details (using redux / api)

  //   Assuming you want to use the first element of the details array
  // handle Close
  const onHandleClose = () => {
    dispatch(setTrackOrderTrue(false));
  };

  // contact;
  // id;
  // item_name;
  // location;
  // recieved_by;
  // recieved_date;
  // status;

  // Create a new object with the same structure as TrackFormData
  const itemDetails = Array.isArray(details) ? details[0] : details;

  const {
    item_name,
    recieved_by,
    contact,
    location,
    recieved_date,
    recieved_time,
    status,
  } = itemDetails || {};

  const onSubmit = async (data: TrackFormData) => {
    // const data = getValues();
    // // Extract purchase_date and expiry_date from data
    // const {
    //   purchase_date,
    //   expiry_date, // Ensure that this matches the key in your form data
    //   price_value,
    //   quantity_value, // Ensure that this matches the key in your form data
    //   supplier_name,
    //   ...restData
    // } = data;

    // // Combine restData with itemDate
    // const formData = {
    //   ...restData,
    //   organization_id: 1,
    //   purchase_date: dayjs(purchase_date).format("YYYY-MM-DD"),
    //   expiry_date: dayjs(expiry_date).format("YYYY-MM-DD"),
    //   quantity: quantity_value,
    //   price: price_value,
    //   supplier: supplier_name,
    // };
    // dispatch(setEditItemTrue(false));
    // try {
    //   // Dispatch the asynchronous action to update the data via API
    //   await dispatch(EditInventoryThunk({ formData }));
    //   // Reset the form using the reset function from react-hook-form
    reset();
    //   // Close the edit form

    //   // Fetch the updated data from the API or redux store
    //   dispatch(GetAllInventoryServicesThunk());
    // } catch (error) {
    //   // Handle API call error
    //   console.error("Error updating data:", error);
    // }
  };

  useEffect(() => {});

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
    // defaultValues: defaultValues,
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
  const formObj: any = {
    item_name: {
      common: nameProps({ defaultValue: item_name }),
      ...remaining,
    },
    recieved_by: {
      common: recievedbyProps({ defaultValue: recieved_by }),

      ...remaining,
    },
    contact: {
      common: contactProps({ defaultValue: contact }),
      ...remaining,
    },

    location: {
      common: locationProps({ defaultValue: location }),

      ...remaining,
    },
    recieved_date: {
      common: recievedDateProps({ defaultValue: recieved_date }),
      ...remaining,
    },
    recieved_time: {
      common: timeProps({ defaultValue: recieved_time }),
      ...remaining,
    },
    status: {
      common: statusProps({ defaultValue: status }),
      options: [
        { label: "Pending", value: "pending" },
        { label: "In Transit", value: "in_transit" },
        { label: "Delieverd", value: "delieverd" },
      ],
      ...remaining,
    },
  };

  // handle Nutton Onclick

  return (
    <>
      <div>
        {isFlag && (
          <CenterSection
            css={{
              customCss:
                "z-[108] absolute flex top-0 left-0 w-full h-full items-ce  nter bg-black/10 ",
            }}
          >
            <div className="z-[101] w-[calc(50vw+10rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-9.4rem)] pb-1 bg-white text-xs rounded-md px-6 py-8 ">
              <p className="text-base text-primary-medium font-medium text-blue">
                Edit Item
              </p>
              <TrackProductForm formObj={formObj} form={form} />
            </div>
            <CloseIconButton css={{}} handleAction={onHandleClose} />
          </CenterSection>
        )}
      </div>
    </>
  );
};

export default TrackDetailsForm;
