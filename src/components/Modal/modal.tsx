import React from "react";

const Modal = ({
  isOpen,
  closeModal,
  title,
  children,
  onSubmit,
  submitText,
  cancelText,
}: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="max-h-[80vh] w-full max-w-md transform overflow-y-auto rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out sm:max-w-lg sm:p-8 md:max-w-xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            {title}
          </h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {children} {/* Modal content */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={closeModal}
              className="w-full rounded-lg bg-gray-300 py-3 font-semibold text-gray-700 transition duration-300 hover:bg-gray-400"
            >
              {cancelText || "Cancel"}
            </button>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
            >
              {submitText || "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
