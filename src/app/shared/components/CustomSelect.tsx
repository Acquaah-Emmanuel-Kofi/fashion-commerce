"use client";

import React, { useState, useRef, useEffect } from "react";
import InputField from "./InputField";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  onSelect: (value: string) => void;
  defaultValue?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  placeholder,
  required = false,
  onSelect,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );
  const [customOption, setCustomOption] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    onSelect(option.value);
    setIsOpen(false);
    setCustomOption("");
  };

  const handleCustomOptionKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && customOption.trim() !== "") {
      const newOption: Option = { value: customOption, label: customOption };
      handleSelect(newOption);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCustomOption(value);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label htmlFor={label} className="block font-medium text-black mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={`border border-[#D9D9D9]  bg-white flex items-center justify-between w-full outline-none
                    placeholder:text-xs px-3 py-2 focus:outline-none focus:ring-2 
                    focus:ring-[#ccc] focus:border-[#ccc] cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue
          ? options.find((opt) => opt.value === selectedValue)?.label ||
            selectedValue
          : placeholder}
        <span>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.375 1.5L7 7.125L12.625 1.5"
              stroke="#232321"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-[#D9D9D9] shadow z-10">
          <ul className="py-2 max-h-40 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
            {/* Custom Option Input */}
            <li className="px-3 py-2">
              <InputField
                name="custom"
                placeholder="Add custom option"
                value={customOption}
                onChange={handleInputChange}
                onKeyDown={handleCustomOptionKeyDown}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
