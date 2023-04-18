import { PropsWithChildren } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const Modal = ({
  show,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <div
      aria-hidden="true"
      className={`fixed left-1/2 top-1/2 z-50 w-1/3 min-w-[300px] -translate-x-1/2 -translate-y-1/2 transform p-4 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="relative max-h-full w-full">
        <div className="relative w-full rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => onClose()}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
