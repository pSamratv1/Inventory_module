/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AddItemFormValidation,
  categoryProps,
  commonActions,
  expiryDateProps,
  nameProps,
  priceUnitProps,
  priceValueProps,
  purchaseDateProps,
  quantityUnitProps,
  quantityValueProps,
  supplierProps,
} from "../../formProps";
import { RootState } from "../../../../../redux-app/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  EditInventoryThunk,
  GetAllInventoryServicesThunk,
  setEditItemTrue,
} from "../../../../../redux-app/inventory-module/InventorySlice";
import { CenterSection, CloseIconButton } from "../../../common";
import ItemForm from "../../ItemForm";
import { useEffect } from "react";
import dayjs from "dayjs";

// interface FormData {
//   item_name: string;
//   item_category: string;
//   quantity_unit: string;
//   quantity_value: string;
//   price_unit: string;
//   price_value: string;
//   purchase_date: string;
//   expiry_date: string;
//   supplier_name: string;
// }
// import { transformOptionsInObj } from "utils/methods/stringMethods";
const EditItemForm = () => {
  // useState for the short popup

  //  Redux Variable
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(
    (state: RootState) => state.Inventory.platform.item._edit_ItemForm
  );
  useEffect(() => {}, [id]);
  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.view.response
  );

  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.edit
  );
  const fetchItems = (id: any) => {
    // Check if items is defined before attempting to filter
    if (details?.items) {
      const filteredData = details?.items?.filter(
        (item: any) => item.id === id
      );
      return filteredData;
    } else {
      return [];
    }
  };
  // Fetch items from the response details (using redux / api)
  const editDataArray = fetchItems(id);
  // Getting the default value from the editDataArray
  const itemName = editDataArray.length > 0 ? editDataArray[0].item_name : "";
  const itemCategory =
    editDataArray.length > 0 ? editDataArray[0].item_category : "";
  const priceUnit = editDataArray.length > 0 ? editDataArray[0].price_unit : "";
  const priceValue = editDataArray.length > 0 ? editDataArray[0].price : "";
  const quanitytValue =
    editDataArray.length > 0 ? editDataArray[0].quantity : "";
  const quantityUnit = editDataArray.length > 0 ? editDataArray[0].unit : "";
  const purchaseDate =
    editDataArray.length > 0 ? editDataArray[0].purchase_date : "";
  const expiryDate =
    editDataArray.length > 0 ? editDataArray[0].expiry_date : "";
  const supplierName =
    editDataArray.length > 0 ? editDataArray[0].supplier : "";

  //   Assuming you want to use the first element of the details array
  // handle Close
  const onHandleClose = () => {
    dispatch(setEditItemTrue(false));
  };

  // OnSubmit handler

  const onSubmit = async () => {
    const data = getValues();
    // Extract purchase_date and expiry_date from data
    const {
      purchase_date,
      expiry_date, // Ensure that this matches the key in your form data
      price_value,
      quantity_value, // Ensure that this matches the key in your form data
      supplier_name,
      ...restData
    } = data;

    // Combine restData with itemDate
    const formData = {
      ...restData,
      organization_id: 1,
      purchase_date: dayjs(purchase_date).format("YYYY-MM-DD"),
      expiry_date: dayjs(expiry_date).format("YYYY-MM-DD"),
      quantity: quantity_value,
      price: price_value,
      supplier: supplier_name,
    };
    dispatch(setEditItemTrue(false));
    try {
      // Dispatch the asynchronous action to update the data via API
      await dispatch(EditInventoryThunk({ formData, id }));
      // Reset the form using the reset function from react-hook-form
      reset();
      // Close the edit form

      // Fetch the updated data from the API or redux store
      dispatch(GetAllInventoryServicesThunk());
    } catch (error) {
      // Handle API call error
      console.error("Error updating data:", error);
    }
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
  const categoryOptions = [
    { label: "Food", value: "1" },
    { label: "Fruit", value: "2" },
  ];

  // Form Object for add
  const formObj: any = {
    item_name: {
      common: nameProps({ defaultValue: itemName }),
      ...remaining,
    },
    item_category: {
      common: categoryProps({ defaultValue: itemCategory }),
      options: categoryOptions,

      ...remaining,
    },
    item_price: {
      unit: {
        common: priceUnitProps({
          defaultValue: priceUnit,
        }),
        options: [
          { label: "NPR", value: "NPR" },
          { label: "USD", value: "USD" },
          { label: "Euro", value: "Euro" },
        ],
        form: remaining.form,

        css: {
          divCss:
            "min-w-[45px] col-span-3 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-[3.2px] sm:min-w-[3rem] sm:px-[6px] md:px-[8px] ",
          inputCss:
            "bg-input-100 rounded-md h-[2.5rem] flex gap-1 text-[11px] text-dark-100 justify-items-center mt-[1.45rem] w-[3rem] ",
          optionCss: "py-4",
        },
        actions: { ...remaining.actions },
        // ...remaining,
      },
      value: {
        common: priceValueProps({
          defaultValue: priceValue,
        }),
        form: remaining.form,

        css: {
          divCss:
            "min-w-[140px] col-span-9 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 min-w-[4.6rem] px-2 sm:min-w-full md:min-w-full",
          inputCss:
            "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center w-[6rem] md:px-[6px]",
        },
        actions: { ...remaining.actions },
        // ...remaining,
        // ...remaining,
      },
    },

    item_quantity: {
      unit: {
        common: quantityUnitProps({
          defaultValue: quantityUnit,
        }),
        options: [
          { label: "Kg", value: "kilogram" },
          { label: "Gm", value: "gram" },
          { label: "Lt", value: "liter" },
          { label: "ML", value: "mililiter" },
          { label: "Pcs", value: "piece" },
        ],
        form: remaining.form,

        css: {
          divCss:
            "min-w-[45px] col-span-3 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-[3.2px] sm:min-w-[3rem] sm:px-[6px] md:px-[8px] ",
          inputCss:
            "bg-input-100 rounded-md h-[2.5rem] flex gap-1 text-[11px] text-dark-100 justify-items-center mt-[1.45rem] w-[3rem] ",
        },
        actions: { ...remaining.actions },
      },
      value: {
        common: quantityValueProps({
          defaultValue: quanitytValue,
        }),
        form: remaining.form,

        css: {
          divCss:
            "min-w-[140px] col-span-9 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-2 sm:min-w-full md:min-w-full",
          inputCss:
            "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center w-[6rem] md:px-[6px]",
        },
        actions: { ...remaining.actions },
      },
    },
    item_date: {
      purchase_date: {
        common: purchaseDateProps({
          defaultValue: purchaseDate,
        }),
        ...remaining,
      },
      expiry_date: {
        common: expiryDateProps({
          defaultValue: expiryDate,
        }),
        ...remaining,
      },
    },
    supplier_name: {
      common: supplierProps({ defaultValue: supplierName }),
      options: [
        { label: "Supplier 1", value: "1" },
        { label: "Supplier 2", value: "2" },
        // Add more options as needed
      ],
      ...remaining,
      // actions: {
      //   ...remaining.actions,
      //   handleOnChange: (e: any) => handleOnChangePoductType(e),
      // },
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
              <ItemForm formObj={formObj} form={form} />
            </div>
            <CloseIconButton css={{}} handleAction={onHandleClose} />
          </CenterSection>
        )}
      </div>
    </>
  );
};

export default EditItemForm;
