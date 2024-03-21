import { ReactNode } from "react";

type props = {
  text: string;
  color?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  border?: string;
  children?: ReactNode;
  padding?: string;
};

export default function Button({
  text,
  color,
  width,
  height,
  borderRadius,
  backgroundColor,
  border,
  children,
  padding,
}: props) {
  return (
    <button
      className="text-[1rem] leading-[1.362rem] font-[400]"
      style={{
        color,
        width,
        height,
        borderRadius,
        backgroundColor,
        border,
        padding,
      }}
    >
      {text} {children}
    </button>
  );
}
