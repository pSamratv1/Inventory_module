import { CommonLayout } from "../../helpers/components/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage404 } from "../../views";
// import ItemPage from "../../views/organization/pages/ItemPage";
import * as Pages from "views/organization/pages/index";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          {/* Inventory module routes */}
          <Route path="item/:id" element={<Pages.ItemPage />} />
          <Route path="dashboard" element={<Pages.InventoryPage />} />
          <Route path="reorder/:id" element={<Pages.ReorderPage />} />
          <Route path="track/:id" element={<Pages.TrackProductPage />} />
          <Route path="supplier/:id" element={<Pages.SupplierPage />} />
        </Route>

        {/* Other routes */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
