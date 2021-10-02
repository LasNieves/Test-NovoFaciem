/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { DownloadIcon, XIcon, UploadIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

export default function SimpleWithDismissButton({ open, setOpen, setVisible }) {

  const closeModal = () => {
    setOpen(false);
    setVisible(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex h-full">

                <div className="mt-4 text-center sm:justify-self-center">
                  <DownloadIcon
                    className="h-8 w-8 text-indigo-600 inline-block mr-2 mb-2  "
                    aria-hidden="true"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-xl sm:text-2xl font-medium sm:font-normal text-gray-900 inline-block"
                  >
                    Instalar Aplicación
                  </Dialog.Title>

                  <hr className="my-3" />

                  <div className="mt-2 mx-2 sm:w-4/5 sm:mx-auto">
                    <p className="text-lg font-normal text-gray-900 inline-block">
                      Agregue la aplicación a su dispositivo para acceder
                      fácilmente a ella en cualquier momento.
                    </p>
                  </div>

                  <hr className="my-3 w-10/12 mx-auto" />

                  <div className="mt-2 ">

                    <div className="sm:flex sm:flex-col">

                      <div className="p-1 mr-2 sm:mr-3">
                        <UploadIcon className="h-6 w-6 text-indigo-600 inline-block mr-2 sm:mr-3 align-middle mb-1" />

                        <Dialog.Description className="align-baseline text-base sm:text-lg font-normal text-gray-900 inline-block">
                          Presione el botón <b> Compartir </b>
                        </Dialog.Description>
                      </div>

                      <div className="p-1">
                        <FontAwesomeIcon
                          icon={faPlusSquare}
                          className=" text-xl text-indigo-600 inline-block mr-2 sm:mr-3 align-middle mb-1"
                        />

                        <Dialog.Description className="text-base sm:text-lg font-normal text-gray-900 inline-block">
                          <b> Agregar </b> a la pantalla de inicio
                        </Dialog.Description>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"></div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

SimpleWithDismissButton.defaultProps = {
  open: false,
};
