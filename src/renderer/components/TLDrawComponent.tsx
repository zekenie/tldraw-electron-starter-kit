import '../tailwind.css';

import { Tldraw } from '@tldraw/tldraw';
import React from 'react';
import 'tldraw/tldraw.css';

import { IDEUtil } from './tools/IDE/util';
import { components, staticAssets, uiOverrides } from './ui-overrides';
import { IDEShapeTool } from './tools/IDE/tool';

export const customShapeUtils = [IDEUtil];
export const customTools = [IDEShapeTool];

const TLDrawComponent: React.FC = () => {
  return (
    <div className="tldraw__editor">
      <Tldraw
        shapeUtils={customShapeUtils}
        tools={customTools}
        onMount={(editor) => {
          editor.createShape({ type: 'IDE', x: 100, y: 100 });
        }}
        overrides={uiOverrides}
        components={components}
        assetUrls={staticAssets}
      />
    </div>
  );
};

export default TLDrawComponent;
