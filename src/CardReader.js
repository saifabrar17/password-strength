import React, { useState } from 'react';
import useScanDetection from 'use-scan-detection';

const CardReader = () => {
  const [cardData, setCardData] = useState('');



  useScanDetection({
    onComplete: setCardData,
    minLength: 3
  });

  return (
    <div>
      <h2>Card Reader</h2>
      <p>Card Data: {cardData}</p>
    </div>
  );
};

export default CardReader;
