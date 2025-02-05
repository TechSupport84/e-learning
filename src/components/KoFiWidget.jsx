import React, { useEffect } from 'react';

function KoFiWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/widget/Widget_2.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.kofiwidget2) {
        window.kofiwidget2.init('Support me on Ko-fi', '#72a4f2', 'J3J019Z41E');
        window.kofiwidget2.draw();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="kofi-widget-container" />
    </div>
  );
}

export default KoFiWidget;
