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
import InputField from "@/app/shared/components/InputField";

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
  const [formData, setFormData] = useState<ProductCreationForm>({
    name: product?.name || "",
    description: product?.description || "",
    categories: product?.categories || [],
    sizes: product?.sizes || [],
    colors: product?.colors || [],
    types: product?.types || [],
    price: product?.price || "0",
    isAvailable: product?.isAvailable || "true",
    images: product?.images || [],
  });

  const [isProductAvailable, setIsProductAvailable] = useState<boolean>(
    product?.isAvailable === "true"
  );

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySelect = (category: string) => {
    setFormData({ ...formData, categories: [category] });
  };

  const handleSizesUpdate = (updatedSizes: string[]) => {
    const transformedToUppercase = updatedSizes.map((size) =>
      size.toUpperCase()
    );
    setFormData({ ...formData, sizes: transformedToUppercase });
  };

  const handleColorsUpdate = (updatedColors: string[]) => {
    const transformedToLowercase = updatedColors.map((color) =>
      color.toUpperCase()
    );

    setFormData({ ...formData, colors: transformedToLowercase });
  };

  const handleProductTypeSelect = (productType: string) => {
    setFormData({ ...formData, types: [productType] });
  };

  const handleIsProductAvailable = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    setIsProductAvailable(isChecked);
    setFormData({ ...formData, isAvailable: isChecked ? "true" : "false" });
  };

  const handleImagesSelect = (files: File[]) => {
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
        categories,
        sizes,
        colors,
        price,
        types,
        isAvailable,
        images,
      } = formData;
      const isValid =
        !!name?.trim() &&
        !!description?.trim() &&
        !!price?.trim() &&
        types.length > 0 &&
        categories.length > 0 &&
        sizes.length > 0 &&
        colors.length > 0 &&
        images.length > 0 &&
        isAvailable !== "";

      setIsFormValid(isValid);
    };

    validateForm();
  }, [formData]);

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
    } else {
      const missingFields = [];

      if (!formData.name.trim()) missingFields.push("Product Name");
      if (!formData.description.trim()) missingFields.push("Description");
      if (!formData.price.trim()) missingFields.push("Price");
      if (formData.categories.length === 0) missingFields.push("categories");
      if (formData.colors.length === 0) missingFields.push("Colors");
      if (formData.sizes.length === 0) missingFields.push("Sizes");
      if (formData.types.length === 0) missingFields.push("Product Type");
      if (!formData.isAvailable.trim()) missingFields.push("Availability");
      if (formData.images.length === 0)
        missingFields.push("Add at least one image");

      const message = `Please fill all Product Details: \n${missingFields.join(
        ", "
      )}`;

      toast.error(message);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: product?.name || "",
      description: product?.description || "",
      categories: product?.categories || [],
      sizes: product?.sizes || [],
      colors: product?.colors || [],
      types: product?.types || [],
      price: product?.price || "0",
      isAvailable: product?.isAvailable || "true",
      images: product?.images || [],
    });
    setIsProductAvailable(product?.isAvailable === "true");
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
            placeholder="Select a category"
            defaultValue={formData.categories[0]}
            label="category"
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
              defaultValue={formData.types[0]}
              label="Product Type"
              placeholder="Select type"
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

          <div>
            <p className="text-base text-black font-thin">
              Check this if the product is available.
            </p>
          </div>

          <div className="text-base flex">
            <input
              type="checkbox"
              checked={isProductAvailable}
              onChange={handleIsProductAvailable}
              className="shrink-0 mt-0.5 border-gray-200 rounded text-black accent-black"
            />
            <label
              htmlFor="hs-checkbox-group-1"
              className="text-base text-black font-medium ms-3"
            >
              Available
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
                src={
                  typeof formData.images[0] === "string"
                    ? formData.images[0]
                    : URL.createObjectURL(formData.images[0])
                }
                alt={`${formData.name} image`}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            )}
          </div>

          {formData.images && (
            <div className="flex gap-3 overflow-x-auto scrollbar-none">
              {formData.images.map((image, index) => (
                <Image
                  key={index}
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  alt={`${formData.name} image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-contain w-[50px]"
                />
              ))}
            </div>
          )}

          <MultiImageUpload onImagesSelect={handleImagesSelect} />
        </div>
      </div>

      <div className="flex justify-end w-full mt-6">
        <div
          className={`grid gap-3 ${
            product
              ? "lg:w-[48%] w-full grid-cols-3"
              : "lg:w-3/12 w-full grid-cols-2"
          }`}
        >
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-2 text-white bg-black hover:bg-slate-800"
          >
            {product ? "UPDATE" : "SUBMIT"}
          </button>

          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              className="w-full py-2 bg-red-600 hover:bg-red-700 text-white"
            >
              DELETE
            </button>
          )}

          <button
            type="button"
            onClick={handleCancel}
            className="w-full py-2 bg-gray-200 text-black hover:bg-gray-400 hover:text-black transition-colors"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
