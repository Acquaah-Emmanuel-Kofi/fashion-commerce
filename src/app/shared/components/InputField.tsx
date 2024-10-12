import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  name: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  name,
  error,
  onChange,
  onBlur,
  onKeyDown,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block font-medium text-black mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        required={required}
        disabled={disabled}
        className={`border border-[#D9D9D9] caret-[#D9D9D9] w-full outline-none placeholder:text-[#5E5E5E] placeholder:text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ccc] focus:border-[#ccc] disabled:bg-gray-100 ${
          error
            ? "border-red-500 text-red-500 focus:ring-red-500"
            : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
