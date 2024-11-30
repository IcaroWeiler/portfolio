import { CSSProperties } from "react";

interface InputProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}

export default function Input({ label, onChange, style }: InputProps) {
  return (
    <div style={style} className="flex flex-col">
      <label className="input-label mb-2 font-bold">{label}</label>
      <input
        style={style}
        className={`custom-input h-[45px] p-2 rounded border border-[#808080]`}
        onChange={onChange}
      ></input>
    </div>
  );
}
