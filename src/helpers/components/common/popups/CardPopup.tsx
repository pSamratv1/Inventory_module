/* eslint-disable @typescript-eslint/no-explicit-any */

import { useBoxVisible } from "../../../hooks/useBoxVisible";
import { Cards } from "../cards/Cards";

export default function CardPopup(props: any) {
  // Props
  const { children, popupArea, isFlag, css } = props;

  // Props variables
  const { divCss, customCss } = css!;

  // Hooks
  const { domRef: ref, isBoxVisible, setIsBoxVisible } = useBoxVisible(false);

  // Actions
  const handleIconClick = () => {
    setIsBoxVisible(true);
  };

  const handleAction = () => {
    setIsBoxVisible(false);
  };

  // Box CSS
  const defaultCss = "";
  const finalCss = divCss ?? defaultCss;

  // Custom Props
  const customCardProps = {
    handleAction,
    isFlag,
    setIsBoxVisible,
    css: { customCss },
  };

  return (
    <div className={finalCss} onClick={handleIconClick}>
      {children}
      {isBoxVisible && (
        <Cards ref={ref} {...customCardProps}>
          {popupArea}
        </Cards>
      )}
    </div>
  );
}
