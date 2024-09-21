import React from 'react';
import { Tldraw } from '@tldraw/tldraw';
import 'tldraw/tldraw.css';

const TLDrawComponent: React.FC = () => {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw
        components={{
          DebugPanel: null,
        }}
      />
    </div>
  );
};

export default TLDrawComponent;
