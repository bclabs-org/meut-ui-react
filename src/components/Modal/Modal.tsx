import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
  displayType?: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({
  children,
  displayType = "center",
  isModalOpen,
  setIsModalOpen,
}) => {
  let modalDisplay;
  let modalPanel;

  switch (displayType) {
    case "center":
      modalDisplay = "items-center justify-center";
      modalPanel = "w-[496px] p-8 rounded-lg bg-white text-left";
      break;
    case "error":
      modalDisplay = "justify-center my-[96px]";
      break;
    default:
      throw Error("invalid display value");
  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-montserrat"
        onClose={() => setIsModalOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={`${modalDisplay} flex min-h-full items-end text-center p-0`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`${modalPanel} relative transform overflow-hidden transition-all shadow-xl`}
              >
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
