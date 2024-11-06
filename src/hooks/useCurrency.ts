"use client";

import { USER_CURRENCY } from "@/app/shared/helpers/constants.helper";
import { useState, useEffect } from "react";

export function useCurrency() {
  const [currency, setCurrency] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(USER_CURRENCY) || "GHS";
    }
    return "GHS";
  });
  const [loading, setLoading] = useState<boolean>(!currency);

  useEffect(() => {
    if (!currency || currency === "GHS") {
      const fetchCurrency = async () => {
        try {
          const res = await fetch("https://ipapi.co/json/");
          const data = await res.json();
          const userCurrency = data.currency || "GHS";

          setCurrency(userCurrency);
          localStorage.setItem(USER_CURRENCY, userCurrency);
        } catch (error) {
          console.error("Failed to fetch location:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchCurrency();
    } else {
      setLoading(false);
    }
  }, [currency]);

  return { currency, loading };
}
