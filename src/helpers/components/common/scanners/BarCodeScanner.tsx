/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect } from "react";
import Quagga from "@smvrnn/quagga2";

interface ProductDetails {
  barcode: string;
  name: string;
  // Add more details as needed
}

const BarcodeFileScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );

  useEffect(() => {
    if (videoRef.current) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: videoRef.current,
            constraints: {
              width: 800,
              height: 600,
              facingMode: "environment", // Use the back camera, 'user' for front camera
            },
          },
          decoder: {
            readers: ["ean_reader"],
          },
          locate: true,
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err: any) => {
          if (err) {
            console.error("Error initializing Quagga:", err);
          } else {
            Quagga.start();
          }
        }
      );

      Quagga.onDetected((result: any) => {
        Quagga.stop();
        if (result && result.codeResult) {
          // Fetch product details based on the barcode
          fetchProductDetails(result.codeResult.code);
        } else {
          console.error("Barcode decoding failed.");
        }
      });

      return () => {
        Quagga.stop();
      };
    }
  }, [videoRef]);

  const fetchProductDetails = async (barcode: string) => {
    // Replace this with your API endpoint or database query to fetch product details
    try {
      const response = await fetch(`YOUR_API_ENDPOINT/${barcode}`);
      const data: ProductDetails = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%", maxWidth: "800px" }} />
      {productDetails && (
        <div>
          <h2>Product Details</h2>
          <p>Barcode: {productDetails.barcode}</p>
          <p>Name: {productDetails.name}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default BarcodeFileScanner;
