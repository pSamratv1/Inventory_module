/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

// Single
export type CssSchema = {
  css: {
    customCss?: string;
    divCss?: string;
    labelCss?: string;
    iconCss?: string;
    inputCss?: string;
    errorCss?: string;
    colorCss?: string;
    imgCss?: string;
  };
};
export type ChildrenSchema = { children?: ReactNode };
export type OtherChildrenSchema = { other?: ReactNode };
export type TitleSchema = { title?: string };
export type ErrorMsgSchema = { errorMsg?: string };
export type SrcSchema = { src?: string };
export type HandleActionSchema = { handleAction?: any };
export type ButtonNameSchema = { buttonName?: string };
export type FlagSchema = { flag?: string; isFlag?: boolean };
export type RefSchema = { ref?: any };
export type PopupAreaSchema = { showPopup?: boolean; popupArea?: ReactNode };
export type StatusSchema = {
  status?: "success" | "alert" | "warning" | "info";
};
export type OptionSchema = { label?: string; value?: string };
export type LoadingSchema = {
  isLoading?: boolean;
  setIsLoading?: (val: boolean) => void;
};
export type CloudinaryImageSchema = {
  uploadFolder?: string;
  fileName?: string;
  uploadPreset?: string;
  profileImageUrl?: string;
};

export type HrefSchema = { href?: string };
export type IconSchema = { icon?: ReactNode };
export type LabelSchema = { label?: string };
export type ColorSchema = { color?: string };

// Modified
export interface CommonSchema
  extends CssSchema,
    ChildrenSchema,
    TitleSchema,
    FlagSchema,
    StatusSchema {}

export type FormTypes = "edit" | "add";

export type FormSchema = {
  formType: FormTypes;
  params: any;
  handleCloseAction?: () => void;
};
