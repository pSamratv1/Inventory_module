/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormSpanError } from "../errors/FormSpanError";

import {
  formDivCss,
  formErrorCss,
  formInputCss,
  formLabelCss,
  formOptionCss,
} from "./sub/props";
import { SelectInputSchema } from "../../../../utils/schemas/helpers/components/ComponentSchema";
import { getFormErrorMsg } from "../../../../utils/methods/formMethods";

export default function SelectTextInput(props: SelectInputSchema) {
  // Props
  const { common, actions, form, css, options } = props;
  // Props variables
  const { input, label, defaultValue, placeholder, showImportant } = common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } = actions!;
  const { divCss, labelCss, inputCss, errorCss, optionCss } = css!;

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const finalDivCss = divCss ?? formDivCss;
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;
  const finalOptionCss = optionCss ?? formOptionCss;
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";

  // Error Props
  const border = errorMsg ? errorBorder : highlightBorder;
  // const labelErrorProps = { css: {}, title: "*" };
  const errorProps = {
    css: { customCss: errorCss ?? formErrorCss },
    title: errorMsg,
  };

  return (
    <div className={`${finalDivCss}`}>
      {label && (
        <label className={finalLabelCss} htmlFor={input}>
          {label} {showImportant && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="flex">
        <input
          id={`${input}-input`}
          {...register(input)}
          className={`${finalInputCss} ${border}`}
          type="text"
          placeholder={placeholder}
          key={`${input}-input`}
          defaultValue={defaultValue ?? ""}
          onClick={handleClick}
          onChange={handleOnChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        />
        <select
          id={`${input}-select`}
          {...register(input)}
          className={`${finalInputCss} ${border}` + "[&>*]:p-8 w-20"}
          type="text"
          placeholder={placeholder}
          key={`${input}-select`}
          defaultValue={defaultValue || ""}
          onClick={handleClick}
          onChange={handleOnChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        >
          {options?.map((item: any, idx: number) => (
            <option
              key={`${idx}. ${item.value}`}
              value={item.value}
              className={finalOptionCss}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {errorMsg && <FormSpanError {...errorProps} />}
    </div>
  );
}
