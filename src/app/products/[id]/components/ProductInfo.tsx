import ColorFilter from "@/app/shared/components/ColorFilter";
import SizeFilter from "@/app/shared/components/SizeFilter";


const ProductInfo = () => {
  return (
    <div className="">
      <h1 className="text-sm font-bold">ABSTRACT PRINT SHIRT</h1>
      <p className="text-sm font-bold">$99</p>
      <p className="text-gray-600 text-xs">MRP incl. of all taxes</p>
      <p className="text-xs font-semibold mt-9">
        Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.
      </p>

      <div className="space-y-5 mt-16">
        <div>
          <ColorFilter />
        </div>
        <div>
          <SizeFilter />
        </div>
      </div>

      <p className="text-slate-400 text-xs my-4">
        FIND YOUR SIZE | MEASUREMENT GUIDE
      </p>
    </div>
  );
};

export default ProductInfo;
