import React, { useState, KeyboardEvent, ChangeEvent } from "react";

interface ChipInputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  tags: string[];
  onTagsUpdate: (updatedTags: string[]) => void;
}

const ChipInput: React.FC<ChipInputProps> = ({
  label,
  placeholder,
  tags,
  required = false,
  onTagsUpdate,
}) => {
  const [currentTag, setCurrentTag] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      (event.key === " " || event.key === "Enter") &&
      currentTag.trim() !== ""
    ) {
      event.preventDefault();

      const updatedTags = [...tags, currentTag.trim()];
      onTagsUpdate(updatedTags);
      setCurrentTag("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);
  };

  const handleTagRemove = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    onTagsUpdate(updatedTags);
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={label} className="block font-medium text-black mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Tag Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        value={currentTag}
        required={required}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="border border-[#D9D9D9] caret-[#D9D9D9] w-full outline-none placeholder:text-[#5E5E5E] placeholder:text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ccc] focus:border-[#ccc] disabled:bg-gray-100"
      />

      {/* Tags (Chips) Display */}
      <div className="flex flex-wrap mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-sm rounded-full px-3 py-1 mr-2 mb-2 uppercase"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-red-600"
              onClick={() => handleTagRemove(tag)}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChipInput;
