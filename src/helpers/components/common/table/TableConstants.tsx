/* eslint-disable @typescript-eslint/no-explicit-any */

// An example of what a design memo should look like
export const INVENTORY_TABLE_MEMO = [
  {
    Header: "",
    id: "inventory_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Item Name",
        accessor: "item_name",
      },
      {
        Header: "Category",
        accessor: "item_category",
      },
      {
        Header: "On Hand",
        accessor: "quantity",
      },
      {
        Header: "Purchase Date",
        accessor: "purchase_date",
      },
      {
        Header: "Barcode Scan",
        accessor: "barcode_scan",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
  },
];
export const TRACK_TABLE_MEMO = [
  {
    Header: "",
    id: "track_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "",
        accessor: "icons",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Item Name",
        accessor: "supplier_item",
      },

      {
        Header: "Supplier Name",
        accessor: "supplier_name",
      },
      {
        Header: "Barcode Scan",
        accessor: "barcode_scan",
      },
      {
        Header: "Supplied Date",
        accessor: "supplied_date",
      },
    ],
  },
];
export const TRACK_TABLE_DATA = [
  {
    id: 345,
    supplier_item: "Salt",
    supplier_name: "@mir maharjan",
    supplied_date: "2023-12-11",
  },
  {
    id: 234,
    supplier_item: "Salt",
    supplier_name: "@mir maharjan",
    supplied_date: "2023-12-11",
  },
  {
    id: 2234,
    supplier_item: "Salt",
    supplier_name: "@mir maharjan",
    supplied_date: "2023-12-11",
  },
];

export const TRACK_PRODUCT_TABLE_MEMO = [
  {
    Header: "",
    id: "track_product_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "Recieved by",
        accessor: "recieved_by",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Recieved Date",
        accessor: "recieved_date",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "actions",
      },
    ],
  },
];
// An example of what a design data should look like
export const TRACK_PRODUCT_TABLE_DATA = [
  {
    id: 1,
    recieved_by: "Amir Maharjan",
    contact: "9840012748",
    location: "Harisiddhi",
    recieved_date: "2024-01-14",
    status: "Incomplete",
  },
  {
    id: 2,
    recieved_by: "Amir Maharjan",
    contact: "9840012748",
    location: "Harisiddhi",
    recieved_date: "2024-01-14",
    status: "Incomplete",
  },
  {
    id: 3,
    recieved_by: "Amir Maharjan",
    contact: "9840012748",
    location: "Harisiddhi",
    recieved_date: "2024-01-14",
    status: "Incomplete",
  },
];

export const REORDER_PRODUCT_TABLE_MEMO = [
  {
    Header: "",
    id: "reorder_product_table",
    isVisible: false,
    hideHeader: false,
    columns: [
      {
        Header: "Item Name",
        accessor: "item_name",
      },
      {
        Header: "Quantity",
        accessor: "reorder_quantity",
      },
      {
        Header: "Reorder Date",
        accessor: "expiry_reminder",
      },
      {
        Header: "Supplier Name",
        accessor: "supplier",
      },
      {
        Header: "Action",
        accessor: "actions",
      },
    ],
  },
];
export const REORDER_PRODUCT_TABLE_DATA = [
  {
    id: "1",
    item_name: "Salt",
    reorder_quantity: "200",
    expiry_reminder: "2023-12-31",
    supplier: "@mir Maharjan",
  },
  {
    id: "2",
    item_name: "Salt",
    reorder_quantity: "100",
    expiry_reminder: "2023-12-31",
    supplier: "@mir Maharjan",
  },
  {
    id: "3",
    item_name: "Salt",
    reorder_quantity: "150",
    expiry_reminder: "2023-12-31",
    supplier: "@mir Maharjan",
  },
];
// An example of what a design data should look like
export const INVENTORY_TABLE_DATA = [
  {
    id: 1,
    item_name: "Example Item",
    item_category: 1,
    purchase_date: "2023-01-01",
    expiry_date: "2023-12-31",
    quantity: 50.0,
    unit: "pcs",
    price: 25.99,
    price_unit: "npr",
    supplier: 1,
  },
  {
    id: 2,
    item_name: "Another Item",
    item_category: 2,
    purchase_date: "2023-01-02",
    expiry_date: "2023-12-30",
    quantity: 20.0,
    unit: "kg",
    price: 15.5,
    price_unit: "usd",
    supplier: 2,
  },
  {
    id: 3,
    item_name: "Yet Another Item",
    item_category: 1,
    purchase_date: "2023-01-03",
    expiry_date: "2023-12-29",
    quantity: 30.0,
    unit: "liters",
    price: 10.99,
    price_unit: "euro",
    supplier: 1,
  },
  {
    id: 4,
    item_name: "New Item",
    item_category: 2,
    purchase_date: "2023-01-04",
    expiry_date: "2023-12-28",
    quantity: 15.0,
    unit: "pcs",
    price: 30.75,
    price_unit: "npr",
    supplier: 2,
  },
  {
    id: 5,
    item_name: "Fresh Item",
    item_category: 1,
    purchase_date: "2023-01-05",
    expiry_date: "2023-12-27",
    quantity: 25.0,
    unit: "grams",
    price: 12.5,
    price_unit: "usd",
    supplier: 1,
  },
  {
    id: 6,
    item_name: "Brand New Item",
    item_category: 2,
    purchase_date: "2023-01-06",
    expiry_date: "2023-12-26",
    quantity: 10.0,
    unit: "pcs",
    price: 20.0,
    price_unit: "euro",
    supplier: 2,
  },
  {
    id: 7,
    item_name: "Test Item",
    item_category: 1,
    purchase_date: "2023-01-07",
    expiry_date: "2023-12-25",
    quantity: 35.0,
    unit: "liters",
    price: 18.75,
    price_unit: "npr",
    supplier: 1,
  },
  {
    id: 8,
    item_name: "Quality Item",
    item_category: 2,
    purchase_date: "2023-01-08",
    expiry_date: "2023-12-24",
    quantity: 18.0,
    unit: "kg",
    price: 22.99,
    price_unit: "usd",
    supplier: 2,
  },
  {
    id: 8,
    item_name: "Quality Item",
    item_category: 2,
    purchase_date: "2023-01-08",
    expiry_date: "2023-12-24",
    quantity: 18.0,
    unit: "kg",
    price: 22.99,
    price_unit: "usd",
    supplier: 2,
  },
];
