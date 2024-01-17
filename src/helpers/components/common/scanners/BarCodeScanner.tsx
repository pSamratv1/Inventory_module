/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  BarcodeFormat,
  BrowserMultiFormatReader,
  DecodeHintType,
  NotFoundException,
  Result,
} from "@zxing/library";
import {
  setAddItemTrue,
  setScannerCameraOpen,
} from "redux-app/inventory-module/InventorySlice";
import { CenterSection, CloseIconButton } from "..";
import { useAppDispatch, useAppSelector } from "helpers/hooks/useStoreHooks";
import { RootState } from "redux-app/store";
import { useNavigate } from "react-router";

const CameraComponent: React.FC = () => {
  // useRef
  const webcamRef = useRef<Webcam>(null);

  // Hooks
  const dispatch = useAppDispatch();
  const naviate = useNavigate();

  // Redux State and Custom State
  const [isFlagTrue, setIsFlagTrue] = useState<boolean>(false);
  const [decodedValue, setDecodedValue] = useState<Text | string>();
  const { isFlag } = useAppSelector(
    (state: RootState) => state.Inventory.platform.scanner
  );

  // Use useMemo to memoize the codeReader instance
  const codeReader = useMemo(() => new BrowserMultiFormatReader(), []);

  // CallBack funcion
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      const hints = new Map();
      hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]);
      if (imageSrc) {
        codeReader
          .decodeFromImage(undefined, imageSrc)
          .then((result: Result) => {
            // Handle the barcode result here
            const resultedValue: string = result.getText();
            console.log(resultedValue);
            setIsFlagTrue(true);
            setDecodedValue(resultedValue);
            naviate("/item/1");
            dispatch(setAddItemTrue(true));
          })
          .catch((err: any) => {
            if (err instanceof NotFoundException) {
              console.error("No barcode or QR code found in the image");
            } else {
              console.error("Error decoding barcode:", err);
            }
          });
      }
    }
  }, [codeReader]);

  React.useEffect(() => {
    if (!isFlagTrue) {
      const intervalId = setInterval(capture, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [capture, isFlagTrue]);

  return (
    <>
      {isFlag && (
        <CenterSection
          css={{
            customCss:
              "z-[108] absolute flex top-0 left-0 w-full h-full items-center bg-black/10 ",
          }}
        >
          <div className="z-[101] w-[calc(50vw+10rem)] sm:min-w-[350px] sm:max-w-[600px] h-[calc(100vh-12rem)] pb-1 bg-white text-xs rounded-md px-6 py-8 ">
            <p className="text-base text-primary-medium font-medium text-blue mb-2">
              Scan QR Code
            </p>
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={600}
            />
          </div>
          <CloseIconButton
            css={{}}
            handleAction={() => {
              dispatch(setScannerCameraOpen(false));
            }}
          />
        </CenterSection>
      )}
    </>
  );
};

export default CameraComponent;
