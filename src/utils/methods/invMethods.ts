import dayjs from "dayjs";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getInventoryDetailsForTable = (details: any) => {
  // Variable to store the required data for table
  const temp: any = [];

  // Map each response data and modify the temp variable
  details &&
    details?.map((item: any) => {
      const {
        id,
        item_name,
        quantity,
        item_category,
        purchase_date,
        expiry_date,
      } = item;
      temp.push({
        id,
        item_name,
        on_hand: `${quantity} pcs`,
        item_category,
        purchase_date,
        expiry_date,
      });
    });

  return temp;
};

export const getInventoryFormDetails = (formData: any) => {
  //  Destructure formdata
  const {
    // image,
    contact_code: cc,
    contact_number: cn,
    email: emp_email,
    first_name: f,
    middle_name: m,
    last_name: l,
    // role: "admin",
    title: position,
  } = formData;

  const request = {
    position,
    organization_joined_date: dayjs().format("YYYY-MM-DD"),
    name: `${f} ${m} ${l}`,
    phone_number: `${cc} ${cn}`,
    emp_email,
  };
  return request;
};
