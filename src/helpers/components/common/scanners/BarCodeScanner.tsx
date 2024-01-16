/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BrowserMultiFormatReader, Result } from "@zxing/library";
import Webcam from "react-webcam";

type BarcodeScannerComponentProps = {
  width: number;
  height: number;
  onUpdate: (arg0: unknown, arg1?: Result) => void;
};

const BarcodeScannerComponent = (props: BarcodeScannerComponentProps) => {
  const { width, height, onUpdate } = props;

  // useRef for accessing the webcam instance
  const webcamRef = React.useRef<any>(null);

  // Use useMemo to memoize the codeReader instance
  const codeReader = React.useMemo(() => new BrowserMultiFormatReader(), []);

  // Callback function to capture the webcam image and decode the barcode
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      codeReader
        .decodeFromImage(undefined, imageSrc)
        .then((result) => {
          onUpdate(null, result);
        })
        .catch((err) => {
          onUpdate(err);
        });
    }
  }, [codeReader, onUpdate]);

  // useEffect to repeatedly call the capture function at a regular interval
  React.useEffect(() => {
    const intervalId = setInterval(capture, 100);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [capture]);

  // Explicitly specify the type for screenshotFormat
  const webcamProps: any = {
    width: width,
    height: height,
    ref: webcamRef,
    screenshotFormat: "image/png", // Specify the type here
    videoConstraints: {
      facingMode: "environment",
    },
  };

  // Return a Webcam component with specified props
  return <Webcam {...webcamProps} />;
};

export default BarcodeScannerComponent;
