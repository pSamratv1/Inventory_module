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

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  EditInventoryThunk,
  GetAllInventoryServicesThunk,
  setEditItemId,
  setEditItemTrue,
} from "../../../../../redux-app/inventory-module/InventorySlice";
import { CenterSection, CloseIconButton } from "../../../common";
import ItemForm from "../../ItemForm";
import { useEffect } from "react";
import dayjs from "dayjs";

interface FormData {
  item_name: string;
  item_category: string;
  quantity_unit: string;
  quantity: string;
  price: string;
  price_unit: string;
  purchase_date: string;
  expiry_date: string;
  supplier_name: string;
}
// import { transformOptionsInObj } from "utils/methods/stringMethods";
const EditItemForm = () => {
  // useState for the short popup
  //  Redux Variable
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(
    (state: RootState) => state.Inventory.platform.item._edit_ItemForm
  );
  const { details } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.view.response
  );

  useEffect(() => {}, [id]);

  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.edit
  );

  const fetchItems = (id: any) => {
    // Check if items is defined before attempting to filter
    if (details?.data) {
      const filteredData = details?.data?.filter((item: any) => item.id === id);
      return filteredData;
    } else {
      return [];
    }
  };

  // Fetch items from the response details (using redux / api)

  //   Assuming you want to use the first element of the details array
  // handle Close
  const onHandleClose = () => {
    dispatch(setEditItemTrue(false));
    dispatch(setEditItemId(null));
  };

  // OnSubmit handler

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    console.log("clicked");

    console.log(data);
    const {
      item_name,
      item_category,
      quantity_unit,
      quantity,
      price,
      price_unit,
      purchase_date,
      expiry_date,
      supplier_name,
    } = data;

    const formData = {
      item_name: item_name,
      item_category: item_category,
      quantity_unit: quantity_unit,
      price_unit: price_unit,
      organization_id: 1,
      purchase_date: dayjs(purchase_date).format("YYYY-MM-DD"),
      expiry_date: dayjs(expiry_date).format("YYYY-MM-DD"),
      quantity: quantity,
      price: price,
      supplier: supplier_name,
    };

    dispatch(setEditItemTrue(false));

    await dispatch(EditInventoryThunk({ formData, id }));

    // Reset the form using the reset function from react-hook-form
    reset();

    // Fetch the updated data from the API or redux store
    dispatch(GetAllInventoryServicesThunk());
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
    onSubmit,
    errors,
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
      common: nameProps({}),
      ...remaining,
    },
    item_category: {
      common: categoryProps({}),
      options: categoryOptions,

      ...remaining,
    },

    price_unit: {
      common: priceUnitProps({}),
      options: [
        { label: "NPR", value: "NPR" },
        { label: "USD", value: "USD" },
        { label: "Euro", value: "Euro" },
      ],
      form: remaining.form,

      css: {
        divCss:
          "min-w-[45px] col-span-5 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-[3.2px] sm:min-w-[3rem] sm:px-[6px] md:px-[8px] ",
        inputCss:
          "bg-input-100 rounded-md h-[2.5rem] flex gap-1 text-[11px] text-dark-100 justify-items-center w-[5.2rem] ",
        optionCss: "",
      },
      actions: { ...remaining.actions },
      // ...remaining,
    },
    price: {
      common: priceValueProps({}),
      form: remaining.form,

      css: {
        divCss:
          "min-w-[140px] col-span-7 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 min-w-[4.6rem] px-2 sm:min-w-full md:min-w-full",
        inputCss:
          "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center w-[6rem] md:px-[6px]",
      },
      actions: { ...remaining.actions },
      // ...remaining,
      // ...remaining,
    },

    quantity_unit: {
      common: quantityUnitProps({}),
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
          "min-w-[45px] col-span-4 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-[3.2px] sm:min-w-[3rem] sm:px-[6px] md:px-[8px] ",
        inputCss:
          "bg-input-100 rounded-md h-[2.5rem] flex gap-1 text-[11px] text-dark-100 justify-items-center  w-[4.4rem] ",
      },
      actions: { ...remaining.actions },
    },
    quantity: {
      common: quantityValueProps({}),
      form: remaining.form,

      css: {
        divCss:
          "min-w-[140px] col-span-8 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-2 sm:min-w-full md:min-w-full",
        inputCss:
          "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center w-[6rem] md:px-[6px]",
      },
      actions: { ...remaining.actions },
    },
    purchase_date: {
      common: purchaseDateProps({}),
      ...remaining,
    },
    expiry_date: {
      common: expiryDateProps({}),
      ...remaining,
    },
    supplier_name: {
      common: supplierProps({}),
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

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const editDataArray = fetchItems(id);
        const editData = editDataArray.length > 0 ? editDataArray[0] : {};

        // Update form values based on editData
        Object.entries(editData).forEach(([name, value]) => {
          setValue(name, value);
        });
      } else {
        // Reset the form when id is not available
        reset();
      }
    };

    fetchData();
  }, [id, reset, setValue]);
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
