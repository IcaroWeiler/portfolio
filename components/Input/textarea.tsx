import { CSSProperties } from "react";

interface InputProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: CSSProperties;
}

export default function TextArea({ label, onChange, style }: InputProps) {
  return (
    <div style={style} className="flex flex-col">
      <label className="input-label mb-2 font-bold">{label}</label>
      <textarea
        rows={5}
        style={{ resize: "none", ...style }}
        className={`custom-input p-2 rounded border border-[#808080]`}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
