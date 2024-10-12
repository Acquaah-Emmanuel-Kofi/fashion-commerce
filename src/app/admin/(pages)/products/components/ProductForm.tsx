import InputField from "@/app/shared/components/InputField";
import React, { useState, useEffect } from "react";
import MultiImageUpload from "./MultiImageUpload";
import Image from "next/image";
import toast from "react-hot-toast";
import { ProductCreationForm } from "@/modules/interfaces/products.interface";
import ChipInput from "./ChipInput";
import CustomSelect from "@/app/shared/components/CustomSelect";
import {
  CATEGORY_OPTIONS,
  PRODUCT_TYPE_OPTIONS,
} from "@/app/shared/helpers/constants.helper";

interface ProductFormProps {
  product?: ProductCreationForm;
  onSubmit: (data: ProductCreationForm) => void;
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
    sizes: product?.sizes || [],
    colors: product?.colors || [],
    type: product?.type || "",
    price: product?.price || "0",
    isAvailable: product?.isAvailable || "",
    images: product?.images || [],
  });

  const [productImage, setProductImage] = useState<string>("");
  const [isProductAvailable, setIsProductAvailable] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySelect = (category: string) => {
    setFormData({ ...formData, category });
  };

  const handleSizesUpdate = (updatedSizes: string[]) => {
    setFormData({ ...formData, sizes: updatedSizes });
  };

  const handleColorsUpdate = (updatedColors: string[]) => {
    setFormData({ ...formData, colors: updatedColors });
  };

  const handleProductTypeSelect = (productType: string) => {
    setFormData({ ...formData, type: productType });
  };

  const handleIsProductAvailable = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsProductAvailable(event.target.checked);
    setFormData({ ...formData, isAvailable: event.target.value });
  };

  const handleImagesSelect = (files: File[]) => {
    setProductImage(URL.createObjectURL(files[files.length - 1]));

    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };

  useEffect(() => {
    const validateForm = () => {
      const {
        name,
        description,
        category,
        sizes,
        colors,
        price,
        type,
        isAvailable,
        images,
      } = formData;

      const isValid =
        !!name.trim() &&
        !!description.trim() &&
        !!category.trim() &&
        !!price.trim() &&
        !!type.trim() &&
        !!isAvailable.trim() &&
        sizes.length > 0 &&
        colors.length > 0 &&
        images.length > 0;

      setIsFormValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
    } else {
      const missingFields = [];

      if (!formData.name.trim()) missingFields.push("\nProduct Name");
      if (!formData.description.trim()) missingFields.push("\nDescription");
      if (!formData.category.trim()) missingFields.push("\nCategory");
      if (!formData.price.trim()) missingFields.push("\nPrice");
      if (formData.colors.length === 0) missingFields.push("\nColors");
      if (formData.sizes.length === 0) missingFields.push("\nSizes");
      if (!formData.type.trim()) missingFields.push("\nProduct Type");
      if (formData.images.length === 0)
        missingFields.push("\nAdd at least one image");
      if (!formData.isAvailable.trim()) missingFields.push("\nAvailabilty");

      const message = `Please fill all Product Details: ${missingFields.join(
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
      sizes: product?.sizes || [],
      colors: product?.colors || [],
      type: product?.type || "",
      price: product?.price || "0",
      isAvailable: product?.isAvailable || "true",
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

          <CustomSelect
            options={CATEGORY_OPTIONS}
            onSelect={handleCategorySelect}
            placeholder="Type category here"
            label="Category"
            required
          />

          <ChipInput
            label="Colors"
            placeholder="Type a color and press space or enter"
            tags={formData.colors}
            onTagsUpdate={handleColorsUpdate}
            required
          />

          <ChipInput
            label="Sizes"
            placeholder="Type a size and press space or enter"
            tags={formData.sizes}
            onTagsUpdate={handleSizesUpdate}
            required
          />

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <CustomSelect
              options={PRODUCT_TYPE_OPTIONS}
              onSelect={handleProductTypeSelect}
              label="Product Type"
              placeholder="Slect type"
              required
            />

            <InputField
              name="price"
              placeholder="Price"
              label="Sale Price"
              type="number"
              value={String(formData.price)}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-base flex">
            <input
              type="checkbox"
              checked={isProductAvailable}
              value={!isProductAvailable ? "true" : "false"}
              onChange={handleIsProductAvailable}
              className="shrink-0 mt-0.5 border-gray-200 rounded text-black accent-black"
            />
            <label
              htmlFor="hs-checkbox-group-1"
              className="text-base text-black font-medium ms-3"
            >
              Avaialable
            </label>
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
