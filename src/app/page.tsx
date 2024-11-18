"use client";
import { useState } from "react";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

export default function Home() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  // Assuming `result` is a string (common for QR codes)
  const handleScan = (detectedCodes: IDetectedBarcode[]) => {
    if (detectedCodes.length > 0) {
      const result = detectedCodes[0];
      alert(`Scanned Result: ${result}`);
      setIsScannerOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsScannerOpen(true)}>Open QR Scanner</button>

      {isScannerOpen && (
        <div style={{ position: "relative", height: "300px", width: "100%" }}>
          <Scanner onScan={handleScan} onError={(err) => console.error(err)} />
          <button
            onClick={() => setIsScannerOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              padding: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
