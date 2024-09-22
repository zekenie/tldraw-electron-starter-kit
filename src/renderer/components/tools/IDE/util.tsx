import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  TLResizeInfo,
  getDefaultColorTheme,
  resizeBox,
} from 'tldraw';

import { IDEProps } from './props';
import { IDEShape, NAME } from './types';

import { mentions } from '@uiw/codemirror-extensions-mentions';
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';

const users = [
  { label: '@Walter White' },
  { label: '@皮皮鲁' },
  { label: '@鲁西西' },
  { label: '@中本聪' },
  { label: '@サトシ・ナカモト' },
  { label: '@野比のび太' },
  { label: '@성덕선' },
];

// There's a guide at the bottom of this file!

export class IDEUtil extends ShapeUtil<IDEShape> {
  static override type = NAME;
  // [1]
  static override props = IDEProps;
  // [2]
  // static override migrations = cardShapeMigrations;

  // [3]
  override isAspectRatioLocked(_shape: IDEShape) {
    return false;
  }
  override canResize(_shape: IDEShape) {
    return true;
  }

  // [4]
  getDefaultProps(): IDEShape['props'] {
    return {
      w: 300,
      h: 300,
      color: 'black',
      title: '',
      code: '',
    };
  }

  canScroll(_shape: IDEShape): boolean {
    return true;
  }

  // [5]
  getGeometry(shape: IDEShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  // [6]
  component(shape: IDEShape) {
    const bounds = this.editor.getShapeGeometry(shape).bounds;
    const theme = getDefaultColorTheme({
      isDarkMode: this.editor.user.getIsDarkMode(),
    });

    // ideas
    // this.editor.getCurrentPageShapesSorted().filter(shape => shape.type === "arrow")

    return (
      <HTMLContainer
        id={shape.id}
        style={{
          border: '1px solid black',
          overflow: 'hidden',
          pointerEvents: 'all',
          backgroundColor: theme[shape.props.color].semi,
          color: theme[shape.props.color].solid,
        }}
      >
        <CodeMirror
          value={shape.props.code}
          onChange={(code) =>
            this.editor.updateShape({
              id: shape.id,
              type: NAME,
              props: { code },
            })
          }
          height={shape.props.h + 'px'}
          extensions={[mentions(users), loadLanguage('typescript')!]}
        />
      </HTMLContainer>
    );
  }

  // [7]
  indicator(shape: IDEShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }

  // [8]
  override onResize(shape: IDEShape, info: TLResizeInfo<IDEShape>) {
    return resizeBox(shape, info);
  }
}
