"use client";

import InputField from "@/app/shared/components/InputField";
import {
  formFields,
  validateEmail,
  validatePhoneNumber,
} from "@/app/shared/helpers/constants.helper";
import { FormFields } from "@/modules/types/common.type";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [formData, setFormData] = useState<FormFields>(formFields);

  const [errors, setErrors] = useState<FormFields>(formFields);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation as the user types
    switch (name) {
      case "email":
        if (!validateEmail(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Invalid email format",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
        break;
      case "phone":
        if (!validatePhoneNumber(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phone: "Invalid phone number format",
          }));
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
        }
        break;
      // default:
      //   if (!value) {
      //     setErrors((prevErrors) => ({
      //       ...prevErrors,
      //       [name]: `${name} is required`,
      //     }));
      //   } else {
      //     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      //   }
      //   break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formIsValid()) {
      toast.success("Submitted Successfully!");
      console.log("Form Data Submitted:", formData);
    } else {
      toast.error("Email and phone are required!");
    }
  };

  const formIsValid = () => {
    return formData.email && formData.phone;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div>
        <label htmlFor="contact-info" className="text-base font-medium">
          CONTACT INFO
        </label>

        <div className="space-y-4 mt-3">
          <InputField
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
          <InputField
            name="phone"
            placeholder="Phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="shipping-address" className="text-base font-medium">
          SHIPPING ADDRESS
        </label>

        <div className="space-y-4 mt-3">
          <div className="flex gap-1">
            <InputField
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleInputChange}
              error={errors.firstname}
            />
            <InputField
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleInputChange}
              error={errors.lastname}
            />
          </div>

          <InputField
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            error={errors.country}
          />

          <InputField
            name="state"
            placeholder="State / Region"
            value={formData.state}
            onChange={handleInputChange}
            error={errors.state}
          />

          <InputField
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            error={errors.address}
          />

          <div className="flex gap-1">
            <InputField
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              error={errors.city}
            />
            <InputField
              name="postalCode"
              placeholder="Postal Code"
              type="number"
              value={formData.postalCode}
              onChange={handleInputChange}
              error={errors.postalCode}
            />
          </div>

          <div className="flex gap-1">
            <div className="w-full py-2.5 px-4 hidden lg:block"></div>
            <button
              type="submit"
              className="flex justify-between items-center bg-[#D9D9D9] py-2.5 px-4 w-full font-beatrice text-sm lg:text-base"
            >
              Submit
              <svg
                width="50"
                height="14"
                viewBox="0 0 50 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H48.5M48.5 7L42.5 1M48.5 7L42.5 13"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
