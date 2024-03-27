import React, { useState } from 'react';
import './LoadingSpinner.css';

const LoadingComponent = () => {
  const [isLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      ) : (
        <div>Content loaded</div>
      )}
    </div>
  );
};

export default LoadingComponent;
