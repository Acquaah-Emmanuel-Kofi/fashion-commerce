import InputField from "@/app/shared/components/InputField";
import React, { useState, useEffect } from "react";
import MultiImageUpload from "./MultiImageUpload";
import Image from "next/image";
import toast from "react-hot-toast";

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
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

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

  const validateForm = () => {
    const {
      name,
      description,
      category,
      brand,
      stock,
      regularPrice,
      salePrice,
      images,
    } = formData;

    const isValid =
      !!name.trim() &&
      !!description.trim() &&
      !!category.trim() &&
      !!brand.trim() &&
      stock > 0 &&
      regularPrice > 0 &&
      salePrice >= 0 &&
      images.length > 0;

    setIsFormValid(isValid);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
    } else {
      const missingFields = [];

      if (!formData.name.trim()) missingFields.push("Product Name");
      if (!formData.description.trim()) missingFields.push("Description");
      if (!formData.category.trim()) missingFields.push("Category");
      if (!formData.brand.trim()) missingFields.push("Brand");
      if (formData.stock <= 0) missingFields.push("Stock Quantity");
      if (formData.regularPrice <= 0) missingFields.push("Regular Price");
      if (formData.salePrice < 0) missingFields.push("Sale Price");
      if (formData.images.length === 0)
        missingFields.push("Add at least one image");

      const message = `Please fill all Product Details: \n ${missingFields.join(
        ", "
      )}`;

      toast.error(message);
    }
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
          <InputField
            name="name"
            placeholder="Type name here"
            label="Product Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <InputField
            name="description"
            placeholder="Type description here"
            label="Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <InputField
            name="category"
            placeholder="Type category here"
            label="Category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
          <InputField
            name="brand"
            placeholder="Type brand name here"
            label="Brand Name"
            value={formData.brand}
            onChange={handleInputChange}
            required
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <InputField
              name="sku"
              placeholder="SKU"
              label="SKU"
              value={formData.sku}
              onChange={handleInputChange}
            />
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
            <InputField
              name="regularPrice"
              placeholder="Price"
              label="Regular Price"
              type="number"
              value={String(formData.regularPrice)}
              onChange={handleInputChange}
              required
            />
            <InputField
              name="salePrice"
              placeholder="Sale Price"
              label="Sale Price"
              type="number"
              value={String(formData.salePrice)}
              onChange={handleInputChange}
              required
            />
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
            className={`w-full py-2 text-white ${
              isFormValid ? "bg-black" : "bg-gray-600"
            }`}
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
