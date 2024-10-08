import { Fragment, useState } from "react";

interface ColorFilterProps {
  colors: string[];
  onSelect: (color: string) => void;
}

const ColorFilter: React.FC<ColorFilterProps> = ({ colors, onSelect }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    onSelect(color);
    setSelectedColor(color);
  };

  return (
    <Fragment>
      <label htmlFor="color" className="font-medium font-beatrice">
        Color
      </label>
      <div className="flex space-x-1">
        {colors?.map((color) => (
          <button
            key={color}
            type="button"
            style={{ background: color.toLowerCase().trim() }}
            className={`flex justify-center items-center p-2.5 w-11 h-11 hover:bg-[#D9D9D9] ${
              selectedColor?.toLowerCase()?.trim() ===
              color?.toLowerCase()?.trim()
                ? "border-2 border-[#ccc]"
                : ""
            }`}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>
    </Fragment>
  );
};

export default ColorFilter;
