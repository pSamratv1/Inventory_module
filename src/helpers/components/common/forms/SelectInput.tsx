/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormSpanError } from "../errors/FormSpanError";
import {
  formDivCss,
  formErrorCss,
  formInputCss,
  formLabelCss,
} from "./sub/props";
import { SelectInputSchema } from "../../../../utils/schemas/helpers/components/ComponentSchema";
import { getFormErrorMsg } from "../../../../utils/methods/formMethods";

export default function SelectInput(props: SelectInputSchema) {
  // Props
  const { common, actions, form, css, options } = props;
  // Props variables
  const { input, label, defaultValue, placeholder, showImportant } = common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } = actions!;
  const { divCss, labelCss, inputCss, errorCss } = css!;

  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const finalDivCss = divCss ?? formDivCss;
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;
  // Css
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";
  const border = errorMsg ? errorBorder : highlightBorder;

  // Error Props
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
      <select
        id={`${input}`}
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
          <option key={`${idx}. ${item.value}`} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {errorMsg && <FormSpanError {...errorProps} />}
    </div>
  );
}
