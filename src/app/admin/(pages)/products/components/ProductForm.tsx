import InputField from "@/app/shared/components/InputField";
import React, { useState } from "react";
import MultiImageUpload from "./MultiImageUpload";
import Image from "next/image";

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
    images: File[];
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
  const [productImage, setProductImage] = useState<string>("");

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

  const handleImagesSelect = (files: File[]) => {
    setProductImage(URL.createObjectURL(files[0]));

    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleCancel = () => {
    setFormData({
      name: product?.name || "",
      description: product?.description || "",
      category: product?.category || "",
      brand: product?.brand || "",
      sku: product?.sku || "",
      stock: product?.stock || 0,
      regularPrice: product?.regularPrice || 0,
      salePrice: product?.salePrice || 0,
      tags: product?.tags || [],
      images: product?.images || [],
    });
  };

  return (
    <div className="p-4 bg-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {/* Left Side Form Fields */}
        <div className="space-y-4">
          <div>
            <InputField
              name="name"
              placeholder="Type name here"
              label="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <InputField
              name="description"
              placeholder="Type description here"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <InputField
              name="category"
              placeholder="Type category here"
              label="Category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <InputField
              name="brand"
              placeholder="Type brand name here"
              label="Brand Name"
              value={formData.brand}
              onChange={handleInputChange}
              required
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
                required
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
                required
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
                required
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
        <div className="space-y-6">
          {/* <ImageUpload onImageSelect={handleImageSelect} /> */}
          <div className="w-full h-[350px] bg-gray-200">
            {formData.images.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center">
                <p>No Image Uploaded Yet!</p>
              </div>
            ) : (
              <Image
                src={productImage}
                alt={`${formData.name} image`}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          <MultiImageUpload onImagesSelect={handleImagesSelect} />
        </div>
      </div>

      <div className="flex justify-end w-full mt-6">
        {/* Form Action Buttons */}
        <div className="grid grid-cols-2 lg:w-3/12 w-full gap-3">
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="w-full py-2 bg-red-600 text-white"
            >
              DELETE
            </button>
          )}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={true}
            className="w-full py-2 bg-black text-white disabled:bg-gray-600"
          >
            {product ? "UPDATE" : "SUBMIT"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full py-2 bg-gray-100 text-black hover:bg-black hover:text-white transition-colors"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
