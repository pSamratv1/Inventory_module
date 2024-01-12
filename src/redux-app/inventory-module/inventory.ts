/* eslint-disable @typescript-eslint/no-explicit-any */

// // Types
export type APiType = { isFlag?: boolean; response: any };
export type ServiceType = {
  add: APiType;
  delete: APiType;
  edit: APiType;
  view: APiType;
};
export type ItemFormSchema = {
  item_name: string;
  item_category: string;
  item_date: {
    purchase_date: string;
    expire_date: string;
  };
  item_quantity: number | string;
  item_price: number | string;
  supplier_name: string;
};

export type CategoryFormSchema = {
  category_name: string;
  sub_category_name: string;
  dynamic_attr: string[];
};
export type ReorderFormSchema = {
  item_name: string;
  reorder_quanity: number | string;
  min_reorder_quantity: number | string;
  remainder_expiry_date: string;
};
export type TrackFormSchema = {
  item_id?: string | number;
  item_name: number | string;
  recieved_by: number | string;
  contact: string;
  location: string;
  recieved_date: string;
  recieved_time: string;
  status: string;
};
export type SupplierFormSchema = {
  item_id?: string | number;
  item_name: number | string;
  supplier_name: string;
  email: string;
  contact: string;
  address: string;
};
export type ItemPlatformSchema = {
  id?: string | number | null;
  input: ItemFormSchema;
  details: Array<{
    item_date: {
      purchase_date: string;
      expiry_date: string;
    };
    item_name: string;
    item_category: string;
    item_quantity: { quantity: string; unit: string };
    item_price: { price: string; unit: string };
    supplier_name: string;
  }>;
};
export type CategoryPlatformSchema = {
  id?: string | number | null;
  input: CategoryFormSchema;
  details: any[];
};
export type ReorderPlatformSchema = {
  id?: string | number | null;
  input: ReorderFormSchema;
  details: ReorderFormSchema[];
};
export type TrackPlatformSchema = {
  id?: string | number | null;
  input: TrackFormSchema;
  details: TrackFormSchema[];
};
export type SupplierPlatformSchema = {
  id?: string | number | null;
  input: SupplierFormSchema;
  details: SupplierFormSchema[];
};
export type InventoryApi = {
  item: ServiceType;
  category: CategoryApi;
  track: ServiceType;
  reorder: ServiceType;
  supplier: ServiceType;
};
export type CategoryApi = { detail: ServiceType; category: ServiceType };
export type ItemPlatform = {
  _add_ItemForm: ItemPlatformSchema;
  _edit_ItemForm: ItemPlatformSchema;
  _delete_ItemForm: ItemPlatformSchema;
};
export type CategoryPlatform = {
  _add_CategoryForm: CategoryPlatformSchema;
  _edit_CategoryForm: CategoryPlatformSchema;
  _delete_CategoryForm: CategoryPlatformSchema;
};
export type ReorderPlatform = {
  _add_ReorderForm: ReorderPlatformSchema;
  _edit_ReorderForm: ReorderPlatformSchema;
  _delete_ReorderForm: ReorderPlatformSchema;
};
export type TrackPlatform = {
  _add_TrackForm: TrackPlatformSchema;
  _edit_TrackForm: TrackPlatformSchema;
  _delete_TrackForm: TrackPlatformSchema;
};
export type SupplierPlatform = {
  _add_SupplierForm: SupplierPlatformSchema;
  _edit_SupplierForm: SupplierPlatformSchema;
  _delete_SupplierForm: SupplierPlatformSchema;
};
export type ItemSliceSchema = {
  platform: {
    item: ItemPlatform;
    category: CategoryPlatform;
    reorder: ReorderPlatform;
    track: TrackPlatform;
    supplier: SupplierPlatform;
  };

  inventory: InventoryApi;
};

// Variables
export const InitialApiData = {
    isFlag: false,
    response: {
      details: [],
      error: "",
      isLoading: false,
      isSuccess: false,
      toastMsg: "",
    },
  },
  InitialServiceData = {
    add: InitialApiData,
    delete: InitialApiData,
    edit: InitialApiData,
    view: InitialApiData,
  };
