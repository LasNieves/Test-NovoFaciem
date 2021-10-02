/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import ButtonPWA from "./ButtonPwa";

export default function HeaderCentered() {
  const [isVisible, setIsVisible] = useState(true);
  let refBanner = useRef();

  const handleHidden = () => {
    refBanner.current.className = "relative bg-indigo-600 animate-banner";
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  return (
    <>
      {isVisible && (
        <div className="relative bg-indigo-600" ref={refBanner}>
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <ButtonPWA  />
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                onClick={handleHidden}
                type="button"
                className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
