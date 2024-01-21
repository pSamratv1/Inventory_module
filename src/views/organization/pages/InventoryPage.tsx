/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cards } from "../../../helpers/components/common";

import BarChart from "../../../helpers/components/common/charts/BarChart";
import PieChart from "../../../helpers/components/common/charts/PieChart";
import LineChart from "../../../helpers/components/common/charts/LineChart";
import { useAppDispatch } from "helpers/hooks/useStoreHooks";

// yeso schema needs to be made and used instead of the InventoryData

export type CardSchema = {
  label: string;
  value: string;
};
const InventoryPage = () => {
  const dispatch = useAppDispatch();

  // // IsSuccess flag for the api fetching
  // const { isSuccess } = useAppSelector(
  //   (state: RootState) => state.Inventory.inventory.track.view.response
  // );
  // // Fetch data when the component mounts
  // useEffect(() => {
  //   dispatch(GetAllTrackThunk(1));
  // }, [dispatch, isSuccess]);

  // Define the state for the date range
  // const [values, setValues] = useState<DateObject[]>([]);
  // // Handle the date range change
  // const handleDateChange = (newValues: DateObject[]) => {
  //   console.log(values, "values");
  // };
  // const inventoryData: any[] = [
  //   {
  //     label: { label: "3% today" },
  //     title: { title: "Total income" },
  //     value: { value: "NPR 50.1K" },
  //     icon: { icon: <MdArrowUpward /> },
  //     bgColor: "#CEFFCD",
  //     textColor: "#04C700",
  //   },
  //   {
  //     label: { label: "33 items sold" },
  //     title: { title: "Sold Product" },
  //     value: { value: "NPR 40.01K" },
  //     icon: { icon: <MdOutlineShoppingCart /> },
  //     bgColor: "#C5C2FB",
  //     textColor: "#4339F2",
  //   },
  //   {
  //     label: { label: "3% today" },
  //     title: { title: "Total Revenue" },
  //     value: { value: "NPR 75.0K" },
  //     icon: { icon: <MdArrowUpward /> },
  //     bgColor: "#FBE4D3",
  //     textColor: "#FD6C04",
  //   },
  // ];
  const cardData: CardSchema[] = [
    {
      label: "No of Categories",
      value: "50",
    },
    {
      label: "No of sub Categories",
      value: "10",
    },
    {
      label: "Total  no of items",
      value: "50",
    },

    // Add more objects if needed
  ];
  return (
    <div className="flex-col p-6 text-sm space-y-6 max-w-full">
      <div className="flex justify-between">
        <div>
          Good Morning{" "}
          <span className="text-purple-600">$#organization_user_name</span>
        </div>
        <div className="w-20">
          datepicker
          {/* <DatePicker value={values} onChange={handleDateChange} range /> */}
        </div>
      </div>
      <div className="flex-col space-y-6  ">
        <div className="grid grid-cols-12 gap-6">
          {cardData.map((item, index) => {
            return (
              <div className="col-span-4" key={`${index}.cards`}>
                <Cards label={item.label} value={item.value} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center shadow-sm border border-slate-200 rounded-lg ">
        <BarChart />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5 flex justify-center items-center shadow-sm border border-slate-200 rounded-lg  max-h-[25rem]">
          <PieChart />
        </div>
        <div className="col-span-7 flex justify-center items-center shadow-sm border border-slate-200 rounded-lg  max-h-[25rem]">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;

// useEffect(() => {
//   const dispatchThunkInSeries = async () => {
//     console.log("mounting the thunk");
//     dispatch(GetAllInventoryServicesThunk());
//   };
//   dispatchThunkInSeries();
// }, [dispatch]);
// const { details } = useAppSelector(
//   (state: RootState) => state.Inventory.inventory.item.view.response
// );
// console.log(details, "details");
