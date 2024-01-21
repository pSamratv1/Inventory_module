/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const GetAllInventoryServices = async () => {
  try {
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/item-add/`;
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
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/item-add/`;

    const { data } = await axios.post(URL!, { ...formData });

    return data;
  } catch (err: any) {
    throw new Error("CreateInventoryServices failed. Please try again later.");
  }
};

export const EditInventoryServices = async ({ formData, id }: any) => {
  const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/item-add/${id}/`;

  try {
    // either put or patch
    const { data } = await axios.put(URL!, { ...formData });
    return data;
  } catch (e: any) {
    console.log("EditInventoryServices failed. Please try again later.", e);
  }
};
export const DeleteInventoryService = async (id: any) => {
  const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/item-add/${id}/`;

  try {
    // either put or patch
    const { data } = await axios.delete(URL);
    return data;
  } catch (e: any) {
    console.log("DeleteInventoryService failed. Please try again later.", e);
  }
};
// Inventory Re-Order Services (Create reoreder subscriptions)
export const AddReOrderServices = async ({ updatedData, id }: any) => {
  const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${1}/item-add/${id}/`;

  try {
    // either put or patch
    const { data } = await axios.put(URL!, { ...updatedData });
    return data;
  } catch (e: any) {
    console.log("AddReOrderServices failed. Please try again later.", e);
  }
};
// Inventory Supplier Services (Create service subscriptions)
export const CreateSuppierServices = async ({ updatedData, id }: any) => {
  try {
    // const URL = import.meta.env.VITE_ORGANIZATION_API_URL;
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${id}/supplier/`;

    const { data } = await axios.post(URL!, { ...updatedData });

    return data;
  } catch (err: any) {
    throw new Error("CreateSuppierServices failed. Please try again later.");
  }
};

// Inventory Track Services (Create track subscriptions)
export const GetTrackServices = async (id: number) => {
  try {
    const URL = `${import.meta.env.VITE_INVENTORY_API_URL}${id}/track/`;

    const { data } = await axios.get(URL!);
    return data;
  } catch (err: any) {
    throw new Error("GetTrackrServices failed. Please try again later.");
  }
};
