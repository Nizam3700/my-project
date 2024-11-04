import React, { useEffect } from 'react';

function ElfsightWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up when component unmounts
    };
  }, []);

  return (
    <div className="elfsight-app-27b81d3c-45e1-4e14-91b2-276709b1b548" data-elfsight-app-lazy></div>
  );
}

export default ElfsightWidget;
