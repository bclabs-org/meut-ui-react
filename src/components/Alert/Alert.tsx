import React, { MouseEventHandler } from "react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

type AlertProps = {
  text: string;
  color?: string;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Alert: React.FC<AlertProps> = ({
  text,
  color = "error",
  setIsAlertOpen,
}: AlertProps) => {
  let alertBackground;
  let alertIcon;
  let alertText;

  switch (color) {
    case "error":
      alertBackground = "bg-pink-50";
      alertIcon = "text-pink-600";
      alertText = "text-pink-800";
      break;
    default:
      throw Error("invalid color value");
  }

  return (
    <div className="fixed my-0 mx-auto left-0 right-0 flex justify-center">
      <div
        className={`${alertBackground} rounded-md p-4 w-max fixed z-10 top-[96px] show`}
      >
        <div className="flex h-[20px]">
          <div>
            <XCircleIcon
              className={`${alertIcon} h-5 w-5`}
              aria-hidden="true"
            />
          </div>
          <div className="ml-3">
            <p className={`${alertText} text-sm font-medium`}>{text}</p>
          </div>
          <div className="ml-3">
            <button
              type="button"
              className={`inline-flex items-center ${alertBackground} ${alertIcon}`}
              onClick={() => setIsAlertOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
