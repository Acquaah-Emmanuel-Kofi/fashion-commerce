"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
  defaultValue?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  onSelect,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    defaultValue
  );
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
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={`border border-[#D9D9D9] caret-[#D9D9D9] bg-white flex items-center justify-between w-full outline-none placeholder:text-[#5E5E5E] 
                    placeholder:text-xs px-3 py-2 focus:outline-none focus:ring-2 
                    focus:ring-[#ccc] focus:border-[#ccc] disabled:bg-gray-100 cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue
          ? options.find((opt) => opt.value === selectedValue)?.label
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-[#D9D9D9] shadow z-10">
          <ul className="py-2 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
