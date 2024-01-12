/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";
import {
  CloudinaryImageSchema,
  CommonSchema,
  FlagSchema,
} from "../../../../utils/schemas/GlobalSchema";

export type CommonPopups = {
  addPopup1?: ReactNode;
};

export interface CommonTableSchema extends CloudinaryImageSchema {
  currentTable: any;
  getTableProps: any;
  getTableBodyProps: any;
  // headerGroups: any;
  // handleHeaderClick: any;
  // rows: any;
  // prepareRow: any;
  renderHead?: any;
  renderBody?: any;
}

export interface CommonDesignSchema extends FlagSchema, CloudinaryImageSchema {
  columns: any;
  data: any;
}

export interface CommonPaginationSchema extends CommonSchema {
  // paginateKey: string;
  currentPage: number;
  paginationCount: number;
  isLoading?: boolean;
  handlePageClick: any;
}
