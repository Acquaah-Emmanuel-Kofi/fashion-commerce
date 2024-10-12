import InputField from "@/app/shared/components/InputField";
import React, { useState } from "react";

interface ProductFormProps {
  product?: {
    name: string;
    description: string;
    category: string;
    brand: string;
    sku: string;
    stock: number;
    regularPrice: number;
    salePrice: number;
    tags: string[];
    images: string[];
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  onDelete?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSubmit,
  onDelete,
}) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    description: product?.description || "",
    category: product?.category || "",
    brand: product?.brand || "",
    sku: product?.sku || "",
    stock: product?.stock || 0,
    regularPrice: product?.regularPrice || 0,
    salePrice: product?.salePrice || 0,
    tags: product?.tags || ["Name", "Test", "Again"],
    images: product?.images || [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTagRemove = (tag: string) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((t) => t !== tag),
    }));
  };

  const handleImageRemove = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 bg-white">
      {/* Left Side Form Fields */}
      <div className="space-y-4">
        <div>
          <InputField
            name="name"
            placeholder="Type name here"
            label="Product Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <InputField
            name="description"
            placeholder="Type description here"
            label="Description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <InputField
            name="category"
            placeholder="Type category here"
            label="Category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <InputField
            name="brand"
            placeholder="Type brand name here"
            label="Brand Name"
            value={formData.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <InputField
              name="sku"
              placeholder="SKU"
              label="SKU"
              value={formData.sku}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputField
              name="stock"
              placeholder="Stock"
              label="Stock Quantity"
              type="number"
              value={String(formData.stock)}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div>
            <InputField
              name="regularPrice"
              placeholder="Price"
              label="Regular Price"
              type="number"
              value={String(formData.regularPrice)}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <InputField
              name="salePrice"
              placeholder="PriSalece"
              label="Sale Price"
              type="number"
              value={String(formData.salePrice)}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Tags */}
        <div className="mt-4">
          <label className="block font-medium mb-1">Tags</label>
          <div className="flex flex-wrap">
            {formData.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-sm rounded-full px-3 py-1 mr-2 mb-2"
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
      </div>

      {/* Right Side Image Upload and Gallery */}
      <div>
        <div className="border border-[#D9D9D9] w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
          {/* Image Preview */}
          <span>Drop your image here, or browse (.jpeg, .png allowed)</span>
        </div>
        <div>
          <label className="block font-medium mb-2">Product Gallery</label>
          {formData.images.map((image, idx) => (
            <div key={idx} className="flex items-center mb-2">
              <img
                src={image}
                alt={`Product thumbnail ${idx}`}
                className="w-10 h-10 border mr-4"
              />
              <span className="flex-grow">{image}</span>
              <button
                type="button"
                className="ml-4 text-red-600"
                onClick={() => handleImageRemove(idx)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        {/* Form Action Buttons */}
        <div className="mt-6 flex justify-between">
          {onDelete && (
            <button
              onClick={onDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              DELETE
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {product ? "UPDATE" : "SUBMIT"}
          </button>
          <button className="px-4 py-2 bg-gray-100 text-black rounded-md">
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
