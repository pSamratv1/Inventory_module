import { FormSpanError } from "..";
import { getFormErrorMsg } from "../../../../utils/methods/formMethods";
import { InputSchema } from "../../../../utils/schemas/helpers/components/ComponentSchema";
import {
  formDivCss,
  formErrorCss,
  formInputCss,
  formLabelCss,
} from "./sub/props";

export default function TextInput(props: InputSchema) {
  // Props
  const { common, actions, form, css } = props;
  // Props variables
  const { input, label, defaultValue, placeholder, showImportant, icon } =
    common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } =
    actions! || {};
  const { divCss, labelCss, inputCss, errorCss } = css || {};
  // Values
  const errorMsg = getFormErrorMsg(errors, input);

  // Css
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";
  const border = errorMsg ? errorBorder : highlightBorder;

  // Final Css
  const finalDivCss = divCss ?? formDivCss;
  const finalLabelCss = labelCss ?? formLabelCss;
  const finalInputCss = inputCss ?? formInputCss;

  // Error Props
  const errorProps = {
    css: { customCss: errorCss ?? formErrorCss },
    title: errorMsg,
  };

  return (
    <div className={`${finalDivCss} px-2 min-w-[150px]`}>
      {label && (
        <label className={finalLabelCss} htmlFor={input}>
          {label} {showImportant && <span className="text-red-400">*</span>}
        </label>
      )}
      {icon && icon}
      <input
        id={input}
        {...(register && register(input))}
        className={`${formInputCss} ${border} ${finalInputCss}`}
        type="text"
        placeholder={placeholder}
        key={input}
        defaultValue={defaultValue ?? ""}
        onClick={handleClick}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
      {errorMsg && <FormSpanError {...errorProps} />}
    </div>
  );
}
