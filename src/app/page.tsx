"use client";
import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function Home() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleScan = (result: any) => {
    if (result) {
      alert(`Scanned Result: ${result}`);
      setIsScannerOpen(false); // ปิดหน้า scanner หลังจากสแกนสำเร็จ
    }
  };

  return (
    <div>
      <button onClick={() => setIsScannerOpen(true)}>
        Open QR Scanner
      </button>

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
