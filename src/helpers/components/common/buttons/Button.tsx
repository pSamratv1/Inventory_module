import { formButtonCss } from "../forms/sub/props";
import Spinner from "../animations/Spinner";
import { ButtonSchema } from "../../../../utils/schemas/helpers/components/ComponentSchema";

export default function Button(props: ButtonSchema) {
  // Props
  const { title, handleAction, css, isFlag, icon } = props;
  // Props variables
  const { customCss, iconCss } = css!;

  const onClick = handleAction && handleAction;
  const className = customCss ?? formButtonCss;

  // Props
  const buttonProps = { onClick, className };

  return (
    <>
      {isFlag ? (
        <button {...{ className }}>
          <Spinner isFlag />
        </button>
      ) : (
        <button {...buttonProps}>
          <div className={iconCss}>{icon}</div>
          {title}
        </button>
      )}
    </>
  );
}
