import React, { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  widthSize?: 'small' | 'medium';
  onOutsideClick?: boolean;
  onClose?: Function;
  isCoverHeader?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  children,
  isModalOpen,
  setIsModalOpen,
  widthSize = 'medium',
  onOutsideClick = true,
  onClose,
  isCoverHeader = false,
}) => {
  let width: string;

  switch (widthSize) {
    case 'small':
      width = 'w-[468px]';
      break;
    case 'medium':
      width = 'w-[718px]';
      break;
    default:
      throw Error('invalid width size pros');
  }

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className={`relative ${isCoverHeader ? 'z-30' : 'z-10'}`}
        onClose={(e) => (onClose ? onClose(e) : setIsModalOpen(!onOutsideClick))}
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
          <div
            className={`fixed inset-0 ${
              isCoverHeader ? 'z-30' : 'z-10'
            } bg-overlay transition-opacity`}
          />
        </Transition.Child>
        <div
          className={`fixed inset-0 ${
            isCoverHeader ? 'z-30' : 'z-10'
          } overflow-y-auto w-screen mx-auto`}
        >
          <div className="flex min-h-screen justify-center text-center items-center py-32">
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
                className={`${width} relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all h-fit`}
              >
                <div className="py-8 px-10">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
