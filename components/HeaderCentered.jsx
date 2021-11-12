/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from "@heroicons/react/outline";
import React, { useRef, useContext } from "react";
import ButtonPWA from "./ButtonPwa";
import BannerCloseContext from "./../context/BannerCloseContext";

export default function HeaderCentered() {
  let refBanner = useRef();
  const { isVisible, setIsVisible } = useContext(BannerCloseContext);

  const handleHidden = () => {
    refBanner.current.className = "relative bg-Naranja animate-banner";
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  return (
    <>
      {isVisible && (
        <div className="relative bg-Naranja" ref={refBanner}>
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-Blanco">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <ButtonPWA />
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                onClick={handleHidden}
                type="button"
                className="flex p-2 rounded-md hover:bg-Naranja focus:outline-none focus:ring-2 focus:ring-B"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-Blanco" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
