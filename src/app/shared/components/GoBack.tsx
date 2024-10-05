"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const GoBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = useCallback(() => {
    pathname !== "/" ? router.back() : router.push("/");
  }, [router, pathname]);

  return (
    <button
      onClick={handleGoBack}
      className="p-2 hover:bg-[#D9D9D9] transition-colors"
      aria-label="Go back"
    >
      <svg
        width="50"
        height="14"
        viewBox="0 0 50 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.5 7H1M1 7L7 1M1 7L7 13"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default GoBackButton;
