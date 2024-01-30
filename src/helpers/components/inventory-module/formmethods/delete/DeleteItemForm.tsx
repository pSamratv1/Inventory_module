/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  setItemDeleteTrue,
  DeleteInventoryThunk,
  GetAllInventoryServicesThunk,
} from "../../../../../redux-app/inventory-module/InventorySlice";
import { RootState } from "../../../../../redux-app/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useStoreHooks";
import { CenterSection, DeleteModal } from "../../../common";

export default function DeleteItemForm() {
  const dispatch = useAppDispatch();

  const { id } = useAppSelector(
    (state: RootState) => state.Inventory.platform.item._delete_ItemForm
  );

  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.inventory.item.delete
  );

  const handleDeletePrompt = () => {
    dispatch(setItemDeleteTrue(false));
    dispatch(DeleteInventoryThunk(id));
    dispatch(GetAllInventoryServicesThunk());
  };

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "bg-black/10 absolute top-0 left-0 w-full h-full min-w-[25rem]",
          }}
        >
          <DeleteModal
            question="Are you sure you want to remove this item?"
            okPrompt="Yes, I'm sure"
            cancelPrompt="No, Cancel"
            handleCancelPrompt={() => dispatch(setItemDeleteTrue(false))}
            handleDeletePrompt={handleDeletePrompt}
          />
        </CenterSection>
      )}
    </>
  );
}
