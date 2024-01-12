/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { setDiscountType } from "redux-app/discount-module/DiscountSlice";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import {
  emailValidation,
  expiryDateValidation,
  nameValidation,
  purchaseDateValidation,
  selectValidation,
  timeValidation,
  valueValidation,
} from "../../../utils/validations/yupValidations";
import * as yup from "yup";

export const AddCategoryFormValidation = () => {
  const validationSchema = yup.object({
    item_category: nameValidation,
    item_subCategory: nameValidation,
  });
  return validationSchema;
};
export const AddCategoryDetailFormValidation = () => {
  const validationSchema = yup.object({
    category_detail: nameValidation,
  });
  return validationSchema;
};

export const AddItemFormValidation = () => {
  const validationSchema = yup.object({
    item_name: nameValidation,
    item_category: selectValidation,

    purchase_date: purchaseDateValidation,
    expiry_date: expiryDateValidation,

    quantity_unit: selectValidation,
    quantity_value: valueValidation,

    price_unit: selectValidation,
    price_value: valueValidation,
    supplier_name: selectValidation,
  });

  return validationSchema;
};
export const ReOrderFormValidation = () => {
  const validationSchema = yup.object({
    reoder_quantity: valueValidation,
    min_reorder_quantity: valueValidation,
    remainder_expiry_date: expiryDateValidation,
  });

  return validationSchema;
};
export const trackProductValidation = () => {
  const validationSchema = yup.object({
    item_name: valueValidation,
    recieved_by: valueValidation,
    contact: valueValidation,
    location: valueValidation,
    recieved_date: expiryDateValidation,
    recieved_time: timeValidation,
    status: selectValidation,
  });

  return validationSchema;
};
export const SupplierValidation = () => {
  const validationSchema = yup.object({
    supplier_item_name: nameValidation,
    supplier_name: nameValidation,
    email: emailValidation,
    contact: valueValidation,
    address: nameValidation,
  });

  return validationSchema;
};
// Props for inputs
export const zIndexProp = "z-50";
export const commonCss = {
    css: {
      divCss:
        "relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12",
      checkboxCss: "w-[16px] h-[16px]",
      labelCss: "",
      inputCss:
        "w-full h-[2.5rem] px-4 rounded-md border-[1px] border-light-250",
      errorCss: "absolute top-[64px] text-red-400 text-[11px] leading-tight",
    },
  },
  commonActions = {
    handleClick: null,
    handleKeyUp: null,
    handleKeyDown: null,
    handleOnChange: null,
  };
export const nameProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "item_name",
  label: "Item Name",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const supplierItemProps = ({ defaultValue }: any) => ({
  input: "supplier_item_name",
  label: "Item Name",
  placeholder: "Enter Item Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const emailProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "email",
  label: "Email",
  placeholder: "Enter Supplier Email",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const supplierProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "supplier_name",
  label: "Supplier Name",
  placeholder: "Enter Supplier Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const categoryDetailProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "category_detail",
  label: "Enter Label name",
  placeholder: "Enter Detail Name",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const categoryDetailUnitProps = ({
  defaultValue,
  handleOnChange,
}: any) => ({
  input: "label_unit",
  label: "Enter Label Unit",
  placeholder: "Enter Unit",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const reoderQuantityProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "reoder_quantity",
  label: "Re-Order Quantity",
  placeholder: "100",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const minReOrderProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "min_reorder_quantity",
  label: "Minimun Number of Order",
  placeholder: "5",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const remainderDateProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "remainder_expiry_date",
  label: "Reminder of Expiry Date",
  placeholder: "Enter Price",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const categoryProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "item_category",
  label: "Item Category ",
  placeholder: "Enter Category",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const itemOnHandProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "item_on_hand",
  label: "On Hand ",
  placeholder: "Enter Quantity",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const subCategoryProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "item_subCategory",
  label: "Item SubCategory ",
  placeholder: "Enter SubCategory",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const quantityUnitProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "quantity_unit",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const quantityValueProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "quantity_value",
  label: "Item Quantity",
  placeholder: "Enter Quantity",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const priceUnitProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "price_unit",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const priceValueProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "price_value",
  label: "Item Price",
  placeholder: "Enter Price",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const purchaseDateProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "purchase_date",
  label: "Purchase Date",
  placeholder: "Purchase Date",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const reOrderDateProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "item_reorder_date",
  label: "Reorder Date",
  placeholder: "Reorder Date",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const expiryDateProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "expiry_date",
  label: "Expiry Date",
  placeholder: "Expiry Date",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});
export const itemExpiryDateProps = ({ defaultValue, handleOnChange }: any) => ({
  input: "item_expiry_date",
  label: "Expiry Date",
  placeholder: "Expiry Date",
  showImportant: true,
  defaultValue: defaultValue ?? "",
  onchange: handleOnChange,
});

export const recievedbyProps = ({ defaultValue }: any) => ({
  input: "recieved_by",
  label: "Recieved By",
  placeholder: "exapmle: Amit Maharjan",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const locationProps = ({ defaultValue }: any) => ({
  input: "address",
  label: "Address",
  placeholder: "example: Kathamandu",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const contactProps = ({ defaultValue }: any) => ({
  input: "contact",
  label: "Contact",
  placeholder: "example: 986737373778",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const recievedDateProps = ({ defaultValue }: any) => ({
  input: "recieved_date",
  label: "Recieved Date",
  placeholder: "DD/MM/YYYY",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const timeProps = ({ defaultValue }: any) => ({
  input: "recieved_time",
  label: "Time",
  placeholder: "",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});
export const statusProps = ({ defaultValue }: any) => ({
  input: "status",
  label: "Status",
  placeholder: "",
  showImportant: true,
  defaultValue: defaultValue ?? "",
});

export const addItemBtnProps = {
  title: "Save",
  css: {
    customCss:
      "w-[6rem] px-3 py-1.5 flex gap-1 justify-center items-center  bg-primary-dark text-white border-[1px] border-primary-medium font-medium text-[11px] rounded-sm",
  },
};
export const addCatgeoryBtnProps = {
  title: "Save",
  css: {
    customCss:
      "w-[6rem] px-3 py-1.5 flex gap-1 justify-center items-center bg-primary-dark text-white border-[1px] border-primary-medium font-medium text-[11px] rounded-sm",
  },
};

export const addInvSettingCheckBoxProps = {
  title: "Save",
  css: {
    customCss:
      "w-[6rem] px-3 py-1.5 flex gap-1 justify-center items-center bg-primary-dark text-white border-[1px] border-primary-medium font-medium text-[11px] rounded-sm",
  },
};
export const addCatgeoryDetailsBtnProps = (handleAction: any) => ({
  title: "Add Details",
  css: {
    customCss:
      "w-[8rem] px-3 py-2 flex gap-1 justify-center items-center bg-disocuntcard text-primary-medium border-[1px] border-primary-medium font-medium text-[14px] font-black rounded-md",
    iconCss: "text-[18px] font-black",
  },
  icon: <MdOutlineAddCircleOutline />,
  handleAction,
});
