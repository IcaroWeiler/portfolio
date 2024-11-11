"use client";
import { CSSProperties, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type: string;
  style?: CSSProperties;
}

export default function Button({
  onClick,
  children,
  style,
  type,
}: ButtonProps) {
  return (
    <button
      className={`py-[19px] px-8 rounded-lg ${type}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </button>
  );
}
