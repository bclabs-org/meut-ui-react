import React, { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import getPadding from './util';

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>;
  widthSize?: 'x-small' | 'small' | 'medium' | 'large';
  onOutsideClick?: boolean;
  onClose?: Function;
  isCoverHeader?: boolean;
  customPadding?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  isModalOpen,
  setIsModalOpen,
  widthSize = 'medium',
  onOutsideClick = true,
  onClose,
  isCoverHeader = false,
  customPadding,
}) => {
  let width: string;

  switch (widthSize) {
    case 'x-small':
      width = 'w-full max-w-[332px]';
      break;
    case 'small':
      width = 'w-[468px]';
      break;
    case 'medium':
      width = 'w-[718px]';
      break;
    case 'large':
      width = 'w-[936px]';
      break;
    default:
      throw Error('invalid width size pros');
  }

  const padding = getPadding(customPadding);

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
          <div className="flex min-h-screen justify-center text-center items-center">
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
                <div className={padding}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
