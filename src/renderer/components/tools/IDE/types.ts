import { TLBaseShape, TLDefaultColorStyle } from '@tldraw/tldraw';

export const NAME = 'IDE' as const;
export type IDEShape = TLBaseShape<
  typeof NAME,
  {
    w: number;
    h: number;
    color: TLDefaultColorStyle;
    title: string;
    code: string;
  }
>;
