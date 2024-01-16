/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo, useRef } from "react";
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
            console.log("Barcode Result:", result.getText());
          })
          .catch((err) => {
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
    const intervalId = setInterval(capture, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [capture]);
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
