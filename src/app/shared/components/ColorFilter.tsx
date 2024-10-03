import { Fragment, useState } from "react";

interface IColors {
  colors: string[]
}

const ColorFilter: React.FC<IColors> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Fragment>
      <label htmlFor="color" className="font-semibold">
        Color
      </label>
      <div className="flex space-x-1">
        {colors?.map((color) => (
          <button
            key={color}
            type="button"
            style={{ background: color.toLowerCase().trim() }}
            className={`flex justify-center items-center w-11 h-11 p-2.5 hover:bg-[#D9D9D9] ${
              selectedColor?.toLowerCase()?.trim() === color?.toLowerCase()?.trim()
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>
    </Fragment>
  );
};

export default ColorFilter;
