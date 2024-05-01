import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader'; // Import QrReader directly

const QRScanner = () => {
  const [result] = useState('');

  // const handleScan = (data) => {
  //   if (data) {
  //     setResult(data);
  //   }
  // };

  // const handleError = (err) => {
  //   console.error(err);
  // };

  return (
    <div>
      {/* <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      /> */}
      <p>{result}</p>
    </div>
  );
};

export default QRScanner;
