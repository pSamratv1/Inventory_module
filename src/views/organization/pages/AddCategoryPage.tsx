/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import AddCategoryForm from "../../../helpers/components/inventory-module/formmethods/add/AddCategoryForm";

const AddCategoryPage = () => {
  // Redux
  // const { inventory } = useAppSelector((state: RootState) => state.Inventory);
  // const { platform } = useAppSelector((state: RootState) => state.Inventory);

  return (
    // <div className="">dsfds</div>
    <div className="relative flex h-[calc(100vh-3.23rem)] justify-center items-center">
      <AddCategoryForm />
    </div>
  );
};

export default AddCategoryPage;
