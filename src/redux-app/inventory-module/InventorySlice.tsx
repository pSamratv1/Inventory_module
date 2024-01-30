/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialServiceData, ItemSliceSchema } from "./inventory";
import { getReduxErrorMsg } from "../../utils/methods/reduxMethods";
import {
  AddReOrderServices,
  CreateInventoryServices,
  CreateSuppierServices,
  DeleteInventoryServices,
  EditInventoryServices,
  GetAllInventoryServices,
  GetAllSupplierServices,
  GetAllTrackServices,
} from "./InventoryService";

export const initialState: ItemSliceSchema = {
  // Platform
  platform: {
    item: {
      _add_ItemForm: {
        input: {
          item_name: "",
          item_category: "",
          item_date: {
            purchase_date: "",
            expire_date: "",
          },
          item_quantity: "",
          item_price: "",
          supplier_name: "",
        },
        details: [],
      },
      _edit_ItemForm: {
        input: {
          item_name: "",
          item_category: "",
          item_date: {
            purchase_date: "",
            expire_date: "",
          },
          item_quantity: "",
          item_price: "",
          supplier_name: "",
        },
        details: [],
      },
      _delete_ItemForm: {
        input: {
          item_name: "",
          item_category: "",
          item_date: {
            purchase_date: "",
            expire_date: "",
          },
          item_quantity: "",
          item_price: "",
          supplier_name: "",
        },
        details: [],
      },
    },
    category: {
      _add_CategoryForm: {
        input: {
          category_name: "",
          sub_category_name: "",
          dynamic_attr: [],
        },
        details: [],
      },
      _edit_CategoryForm: {
        input: {
          category_name: "",
          sub_category_name: "",
          dynamic_attr: [],
        },
        details: [],
      },
      _delete_CategoryForm: {
        input: {
          category_name: "",
          sub_category_name: "",
          dynamic_attr: [],
        },
        details: [],
      },
    },
    reorder: {
      _add_ReorderForm: {
        input: {
          item_name: "",
          reorder_quanity: "",
          min_reorder_quantity: "",
          remainder_expiry_date: "",
        },
        details: [],
      },
      _edit_ReorderForm: {
        input: {
          item_name: "",
          reorder_quanity: "",
          min_reorder_quantity: "",
          remainder_expiry_date: "",
        },
        details: [],
      },
      _delete_ReorderForm: {
        input: {
          item_name: "",
          reorder_quanity: "",
          min_reorder_quantity: "",
          remainder_expiry_date: "",
        },
        details: [],
      },
    },
    track: {
      _add_TrackForm: {
        input: {
          item_name: "",
          recieved_by: "",
          contact: "",
          location: "",
          recieved_date: "",
          recieved_time: "",
          status: "",
        },
        details: [],
      },
      _edit_TrackForm: {
        input: {
          item_name: "",
          recieved_by: "",
          contact: "",
          location: "",
          recieved_date: "",
          recieved_time: "",
          status: "",
        },
        details: [],
      },
      _delete_TrackForm: {
        input: {
          item_name: "",
          recieved_by: "",
          contact: "",
          location: "",
          recieved_date: "",
          recieved_time: "",
          status: "",
        },
        details: [],
      },
    },
    supplier: {
      _add_SupplierForm: {
        input: {
          item_name: "",
          supplier_name: "",
          email: "",
          contact: "",
          address: "",
        },
        details: [],
      },
      _edit_SupplierForm: {
        input: {
          item_name: "",
          supplier_name: "",
          email: "",
          contact: "",
          address: "",
        },
        details: [],
      },
      _delete_SupplierForm: {
        input: {
          item_name: "",
          supplier_name: "",
          email: "",
          contact: "",
          address: "",
        },
        details: [],
      },
    },
    scanner: {
      isFlag: false,
      qr_value: "",
    },
  },
  inventory: {
    item: InitialServiceData,
    category: {
      category: InitialServiceData,
      detail: InitialServiceData,
    },
    track: InitialServiceData,
    reorder: InitialServiceData,
    supplier: InitialServiceData,
  },
};

// get Inventory Services
export const GetAllInventoryServicesThunk = createAsyncThunk(
  "GetAllInventoryServicesThunk",
  async (_, thunkAPI) => {
    try {
      const data = await GetAllInventoryServices();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

// create Inentory Service
export const CreateInventoryThunk = createAsyncThunk(
  "CreateInventoryThunk",
  async (formData: any, thunkAPI) => {
    try {
      return await CreateInventoryServices(formData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

// Edit Inentory Service
export const EditInventoryThunk = createAsyncThunk(
  "EditInventoryThunk",
  async ({ formData, id }: any, thunkAPI) => {
    try {
      return await EditInventoryServices({ formData, id });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

// Delete Inventory Service
export const DeleteInventoryThunk = createAsyncThunk(
  "DeleteInventoryThunk",
  async (id: any, thunkAPI) => {
    try {
      return await DeleteInventoryServices(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

// Add Re-order Service
export const AddReOrderThunk = createAsyncThunk(
  "AddReOrderThunk",
  async ({ updatedData, id }: any, thunkAPI) => {
    try {
      console.log(updatedData, id, "formdDataaaaaaaa reorder");
      return await AddReOrderServices({ updatedData, id });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

export const AddSupplierThunk = createAsyncThunk(
  "AddSupplierThunk",
  async (updatedData: any, thunkAPI) => {
    try {
      console.log(updatedData, "formdDataaaaaaaa");
      return await CreateSuppierServices(updatedData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

export const GetAllTrackThunk = createAsyncThunk(
  "GetAllTrackThunk",
  async (id: number, thunkAPI) => {
    try {
      return await GetAllTrackServices(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

export const GetAllSupplierThunk = createAsyncThunk(
  "GetAllSupplierThunk",
  async (id: number, thunkAPI) => {
    try {
      return await GetAllSupplierServices(id);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(getReduxErrorMsg(error));
    }
  }
);

export const InventorySlice = createSlice({
  name: " inventory",
  initialState,
  reducers: {
    // Item Reducers
    //  Add
    setAddItemTrue: (state, action) => {
      state.inventory.item.add.isFlag = action.payload;
    },
    setAddItem: (state, action) => {
      state.platform.item._add_ItemForm.details = action.payload;
    },
    setEditItemId: (state, action) => {
      state.platform.item._edit_ItemForm.id = action.payload;
    },
    //  Edit
    setEditItemTrue: (state, action) => {
      state.inventory.item.edit.isFlag = action.payload;
    },
    setEditItemData: (state, action) => {
      state.platform.item._edit_ItemForm.details = action.payload;
    },
    // Delete
    // setDeleteItem: (state, action) => {
    //   const itemIdToDelete = action.payload;
    //   // Implement logic to remove the item with itemIdToDelete from the state
    //   state.inventory.reorder.view.response.details.items =
    //     state.inventory.reorder.view.response.details.items.filter(
    //       (item: any) => item.id !== itemIdToDelete
    //     );
    // },
    setItemDeleteTrue: (state, action) => {
      state.inventory.item.delete.isFlag = action.payload;
    },
    setDeleteItemId: (state, action) => {
      state.platform.item._delete_ItemForm.id = action.payload;
    },

    // Category
    setAddCategoryName: (state, action) => {
      state.platform.item._add_ItemForm.input.item_name = action.payload;
    },
    setAddSubCategoryName: (state, action) => {
      state.platform.category._add_CategoryForm.input.dynamic_attr =
        action.payload;
    },
    setAddCategoryDetailsTrue: (state, action) => {
      state.inventory.category.detail.add.isFlag = action.payload;
    },
    setAddCategoryTrue: (state, action) => {
      state.inventory.category.category.add.isFlag = action.payload;
    },

    // Reorder Reducers
    setReorderId: (state, action) => {
      state.platform.reorder._add_ReorderForm.id = action.payload;
    },
    setReorderAddTrue: (state, action) => {
      state.inventory.reorder.add.isFlag = action.payload;
    },
    setReorderViewTrue: (state, action) => {
      state.inventory.reorder.view.isFlag = action.payload;
    },
    setReorderViewData: (state, action) => {
      state.platform.reorder._edit_ReorderForm.details = action.payload;
    },
    setReorderProductId: (state, action) => {
      state.platform.reorder._edit_ReorderForm.id = action.payload;
    },

    // Track Reducers
    setTrackProductId: (state, action) => {
      state.platform.track._edit_TrackForm.id = action.payload;
    },
    setTrackProductData: (state, action) => {
      console.log("data currently in pipeline");
      state.platform.track._edit_TrackForm.details = action.payload;
    },
    setTrackOrderTrue: (state, action) => {
      state.inventory.track.edit.isFlag = action.payload;
    },

    // Supplier Reducer
    setSupplierAddTrue: (state, action) => {
      state.inventory.supplier.add.isFlag = action.payload;
    },
    setEditSupplierId: (state, action) => {
      state.platform.supplier._edit_SupplierForm.id = action.payload;
    },
    setSupplierEditTrue: (state, action) => {
      state.inventory.supplier.edit.isFlag = action.payload;
    },
    // Scanner
    setScannerCameraOpen: (state, action) => {
      state.platform.scanner.isFlag = action.payload;
    },
    setScannerValue: (state, action) => {
      state.platform.scanner.qr_value = action.payload;
    },
  },

  // extra Reducers
  extraReducers: (builder) => {
    builder
      // Get All Inventory Item modules
      .addCase(GetAllInventoryServicesThunk.pending, (state) => {
        state.inventory.item.view.response.isLoading = true;
        state.inventory.item.view.response.isSuccess = false;
      })
      .addCase(GetAllInventoryServicesThunk.fulfilled, (state, action) => {
        state.inventory.item.view.response.isLoading = false;

        state.inventory.item.view.response.isSuccess = true;
        state.inventory.item.view.response.details = action.payload;
        state.inventory.reorder.view.response.details = action.payload;
      })
      .addCase(GetAllInventoryServicesThunk.rejected, (state) => {
        state.inventory.item.view.response.isSuccess = false;
        state.inventory.item.view.response.isLoading = false;
      })

      // Create All Inventory Item modules
      .addCase(CreateInventoryThunk.pending, (state) => {
        state.inventory.item.add.response.isLoading = true;
      })
      .addCase(CreateInventoryThunk.fulfilled, (state, action) => {
        state.inventory.item.add.response.isLoading = false;
        state.inventory.item.add.response.isSuccess = true;
        state.inventory.item.add.response.details = action.payload;
      })
      .addCase(CreateInventoryThunk.rejected, (state) => {
        state.inventory.item.add.response.isSuccess = false;
        state.inventory.item.add.response.isLoading = false;
      })

      //Edit All Inventory Item modules
      .addCase(EditInventoryThunk.pending, (state) => {
        state.inventory.item.edit.response.isLoading = true;
      })
      .addCase(EditInventoryThunk.fulfilled, (state, action) => {
        state.inventory.item.edit.response.isLoading = false;
        state.inventory.item.edit.response.isSuccess = true;
        state.inventory.item.edit.response.details = action.payload;
      })
      .addCase(EditInventoryThunk.rejected, (state) => {
        state.inventory.item.edit.response.isSuccess = false;
        state.inventory.item.edit.response.isLoading = false;
      })

      // Delete Inventory Item modules
      .addCase(DeleteInventoryThunk.pending, (state) => {
        state.inventory.item.delete.response.isLoading = true;
      })
      .addCase(DeleteInventoryThunk.fulfilled, (state, action) => {
        state.inventory.item.delete.response.isLoading = false;
        state.inventory.item.delete.response.isSuccess = true;
        state.inventory.item.delete.response.details = action.payload;
      })
      .addCase(DeleteInventoryThunk.rejected, (state) => {
        state.inventory.item.delete.response.isSuccess = false;
        state.inventory.item.delete.response.isLoading = false;
      })

      // Add Reorder Item modules
      .addCase(AddReOrderThunk.pending, (state) => {
        state.inventory.item.edit.response.isLoading = true;
      })
      .addCase(AddReOrderThunk.fulfilled, (state, action) => {
        state.inventory.item.edit.response.isLoading = false;
        state.inventory.item.edit.response.isSuccess = true;
        state.inventory.item.edit.response.details = action.payload;
      })
      .addCase(AddReOrderThunk.rejected, (state) => {
        state.inventory.item.edit.response.isSuccess = false;
        state.inventory.item.edit.response.isLoading = false;
      })
      // Add Supplier Item modules
      .addCase(AddSupplierThunk.pending, (state) => {
        state.inventory.supplier.add.response.isLoading = true;
      })
      .addCase(AddSupplierThunk.fulfilled, (state, action) => {
        state.inventory.supplier.add.response.isLoading = false;
        state.inventory.supplier.add.response.isSuccess = true;
        state.inventory.supplier.add.response.details = action.payload;
      })
      .addCase(AddSupplierThunk.rejected, (state) => {
        state.inventory.supplier.add.response.isSuccess = false;
        state.inventory.supplier.add.response.isLoading = false;
      })
      // Get All Track Item modules
      .addCase(GetAllTrackThunk.pending, (state) => {
        state.inventory.track.view.response.isLoading = true;
      })
      .addCase(GetAllTrackThunk.fulfilled, (state, action) => {
        state.inventory.track.view.response.isLoading = false;
        state.inventory.track.view.response.isSuccess = true;
        state.inventory.track.view.response.details = action.payload;
      })
      .addCase(GetAllTrackThunk.rejected, (state) => {
        state.inventory.track.view.response.isSuccess = false;
        state.inventory.track.view.response.isLoading = false;
      })
      // Get All Supplier Details
      .addCase(GetAllSupplierThunk.pending, (state) => {
        state.inventory.supplier.view.response.isLoading = true;
      })
      .addCase(GetAllSupplierThunk.fulfilled, (state, action) => {
        state.inventory.supplier.view.response.isLoading = false;
        state.inventory.supplier.view.response.isSuccess = true;
        state.inventory.supplier.view.response.details = action.payload;
      })
      .addCase(GetAllSupplierThunk.rejected, (state) => {
        state.inventory.supplier.view.response.isSuccess = false;
        state.inventory.supplier.view.response.isLoading = false;
      });
  },
});
export const {
  // Add Item
  setAddItem,
  setAddItemTrue,

  // Add  Category
  setAddCategoryDetailsTrue,
  setAddCategoryTrue,
  setAddCategoryName,
  setAddSubCategoryName,

  // Edit Item
  setEditItemTrue,
  setEditItemId,
  setEditItemData,

  // Delete Item
  setItemDeleteTrue,
  setDeleteItemId,

  // Reorder CRUD
  setReorderId,
  setReorderProductId,
  setReorderViewData,
  setReorderAddTrue,
  setReorderViewTrue,

  // Track Item
  setTrackOrderTrue,
  setTrackProductId,
  setTrackProductData,

  // Supplier
  setSupplierAddTrue,
  setSupplierEditTrue,
  setEditSupplierId,
  // Scanner
  setScannerCameraOpen,
  setScannerValue,
} = InventorySlice.actions;
export default InventorySlice.reducer;
