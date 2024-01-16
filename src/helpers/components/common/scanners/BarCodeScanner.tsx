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

const CameraComponent: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isFlag, setIsFlag] = useState<boolean>(false);
  const [decodedValue, setDecodedValue] = useState<Text | string>();

  // Use useMemo to memoize the codeReader instance
  const codeReader = useMemo(() => new BrowserMultiFormatReader(), []);
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

            setIsFlag(true);
            setDecodedValue(resultedValue);
          })
          .catch((_) => {
            // if (err instanceof NotFoundException) {
            //   console.error("No barcode or QR code found in the image");
            // } else {
            //   console.error("Error decoding barcode:", err);
            // }
          });
      }
    }
  }, [codeReader]);

  React.useEffect(() => {
    if (!isFlag) {
      const intervalId = setInterval(capture, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [capture, isFlag]);
  console.log(decodedValue, "webcamRefwebcamRefwebcamRef");

  return (
    <div>
      <h2>React Camera Example</h2>
      <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
      />
    </div>
  );
};

export default CameraComponent;
