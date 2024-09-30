import { Fragment, useState } from "react";
import { colorOptions } from "../helpers/constants.helper";

const ColorFilter = () => {
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
        {colorOptions.map((color) => (
          <button
            key={color}
            type="button"
            style={{ background: color }}
            className={`flex justify-center items-center w-11 h-11 p-2.5 hover:bg-[#D9D9D9] ${
              selectedColor === color
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
