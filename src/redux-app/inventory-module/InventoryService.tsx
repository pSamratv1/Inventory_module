/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const GetAllInventoryServices = async () => {
  try {
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/items/`;
    const { data } = await axios.get(URL!);

    return data;
  } catch (err: any) {
    throw new Error("GetAllInventoryServices failed. Please try again later.");
  }
};

// Inventory Services (Create service subscriptions)
export const CreateInventoryServices = async (formData: any) => {
  try {
    // const URL = import.meta.env.VITE_ORGANIZATION_API_URL;
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/items/`;

    const { data } = await axios.post(URL!, { ...formData });

    return data;
  } catch (err: any) {
    throw new Error("CreateInventoryServices failed. Please try again later.");
  }
};

export const EditInventoryServices = async ({ formData, id }: any) => {
  const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/items/${id}/`;

  try {
    // either put or patch
    const { data } = await axios.put(URL!, { ...formData });
    return data;
  } catch (e: any) {
    console.log("EditInventoryServices failed. Please try again later.", e);
  }
};

// Item Delete Services
export const DeleteInventoryServices = async (id: any) => {
  const URL = `${
    import.meta.env.VITE_INVENTORY_API_URL
  }${1}/item-detail/${id}/`;

  try {
    // either put or patch
    const { data } = await axios.delete(URL);
    console.log(data, "data");
    return data;
  } catch (e: any) {
    console.log("DeleteInventoryService failed. Please try again later.", e);
  }
};
// Inventory Re-Order Services (Create reoreder subscriptions)
export const AddReOrderServices = async ({ updatedData, id }: any) => {
  const URL = `${
    import.meta.env.VITE_INVENTORY_API_URL
  }${1}/item-detail/${id}/`;

  try {
    // either put or patch
    const { data } = await axios.put(URL!, { ...updatedData });
    return data;
  } catch (e: any) {
    console.log("AddReOrderServices failed. Please try again later.", e);
  }
};
// Inventory Supplier Services (Create service subscriptions)
export const CreateSuppierServices = async (updatedData: any) => {
  const id = 1;
  console.log(updatedData);
  try {
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${id}/supplier/`;

    const { data } = await axios.post(URL!, { ...updatedData });

    return data;
  } catch (err: any) {
    throw new Error("CreateSuppierServices failed. Please try again later.");
  }
};

// Inventory Track Services (Retrieve track subscriptions)
export const GetAllTrackServices = async (id: number) => {
  try {
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${id}/track/`;

    const { data } = await axios.get(URL!);
    return data;
  } catch (err: any) {
    throw new Error("GetTrackrServices failed. Please try again later.");
  }
};

// Inventory Supplier Services (Retrieve supplier subscriptions)
export const GetAllSupplierServices = async (id: number) => {
  try {
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${id}/supplier/`;

    const { data } = await axios.get(URL!);
    return data;
  } catch (err: any) {
    throw new Error("GetAllSupplierServices failed. Please try again later.");
  }
};
