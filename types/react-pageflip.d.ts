declare module "react-pageflip" {
  import * as React from "react";

  export type FlipBookSize = "fixed" | "stretch";

  export interface HTMLFlipBookProps {
    // only required
    width: number;
    height: number;

    // optional (defaults exist in runtime/docs)
    size?: FlipBookSize;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;

    drawShadow?: boolean;
    flippingTime?: number;
    usePortrait?: boolean;
    startZIndex?: number;
    autoSize?: boolean;
    maxShadowOpacity?: number;

    showCover?: boolean;
    mobileScrollSupport?: boolean;
    swipeDistance?: number;
    clickEventForward?: boolean;
    useMouseEvents?: boolean;
    disableFlipByClick?: boolean;
    renderOnlyPageLengthChange?: boolean;

    style?: React.CSSProperties;
    className?: string;

    // events (optional)
    onFlip?: (e: { data: number; object: unknown }) => void;
    onChangeOrientation?: (e: { data: "portrait" | "landscape"; object: unknown }) => void;
    onChangeState?: (e: { data: string; object: unknown }) => void;
  }

  const HTMLFlipBook: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.PropsWithChildren<HTMLFlipBookProps>> &
      React.RefAttributes<unknown>
  >;

  export default HTMLFlipBook;
}