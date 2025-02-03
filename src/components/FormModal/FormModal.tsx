import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import the Plus Icon from react-icons

interface TyreDetail {
  BillNo: string;
  BillDate: string;
  DealerName: string;
  rate: string;
  Makers: string;
  warranty: string;
  TyreNo: string;
  TyreModel: string; // "New", "Old", or "Resole"
  TyreType: string; // "New", "Old", or "Resole"
  FrontRear: string; // "Front" or "Rear"
  FittedOnDate: string;
  removedOnDate: string;
  StartKm: number;
  EndKm: number;
}

interface Field {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  value: string | number | boolean | File | File[]; // Updated to allow File types
}

interface FormModalProps {
  title: string;
  onClose: () => void;
  fields: Field[];
  onSubmit: (formData: { [key: string]: any }) => void;
}

export default function FormModal({
  onClose,
  fields,
  title,
  onSubmit,
}: FormModalProps) {
  const [formData, setFormData] = useState<{ [key: string]: any }>(
    fields.reduce(
      (acc, field) => {
        acc[field.id] = field.value || ""; // Initialize form data with pre-filled values or empty strings
        return acc;
      },
      {} as { [key: string]: any },
    ),
  );

  const [tyreDetails, setTyreDetails] = useState<TyreDetail[]>([]); // Empty initial state for tyre details
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview

  const handleUploadClick = (fieldId: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*"; // Accept only image files

    input.click();

    input.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        const file = target.files[0]; // Get the selected file
        if (file) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldId]: file, // Update the file field only
          }));

          const previewUrl = URL.createObjectURL(file);
          setImagePreview(previewUrl); // Set the image preview URL
        }
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldId: string,
    tyreIndex?: number,
  ) => {
    const { name, value } = e.target;

    if (tyreIndex !== undefined) {
      // Handle tyre details input change
      const updatedTyreDetails = [...tyreDetails];
      updatedTyreDetails[tyreIndex] = {
        ...updatedTyreDetails[tyreIndex],
        [name]: value,
      };
      setTyreDetails(updatedTyreDetails);
    } else {
      // Handle general form data input change
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullFormData = { ...formData, tyreDetails };
    onSubmit(fullFormData);
  };

  const addTyreDetail = () => {
    const newTyreDetail: TyreDetail = {
      BillNo: "",
      BillDate: "",
      DealerName: "",
      rate: "",
      Makers: "",
      warranty: "",
      TyreNo: "",
      TyreModel: "",
      TyreType: "",
      FrontRear: "",
      FittedOnDate: "",
      removedOnDate: "",
      StartKm: 0,
      EndKm: 0,
    };

    setTyreDetails([...tyreDetails, newTyreDetail]);
  };

  const capitalizeWords = (str: string) => {
    if (!str) return str;
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const categorizeFields = () => {
    const categorized: { [key: string]: Field[] } = {};

    fields.forEach((field) => {
      const category = field.id.split(".")[0]; // Extract the category from the ID (e.g., "Battery", "Document", etc.)
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push(field);
    });

    return categorized;
  };

  const categorizedFields = categorizeFields();

  return (
    <div className="fixed inset-0 z-50 mt-10 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 text-black">
      <div className="relative mx-4 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="text-right font-extrabold" onClick={onClose}>
          X
        </div>
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-700">
          {title}
        </h2>

        <form
          className="max-h-96 space-y-4 overflow-y-auto"
          onSubmit={handleSubmit}
        >
          {/* Loop through categorized fields and create sections dynamically */}
          {Object.keys(categorizedFields).map((category) => (
            <div key={category} className="mb-4 rounded-md border p-4">
              <h3 className="text-lg font-semibold">
                {capitalizeWords(category)} Details
              </h3>
              <div className="mb-4">
                {categorizedFields[category].map((field) => (
                  <div key={field.id} className="mb-4">
                    <label className="font-medium">
                      {capitalizeWords(field.placeholder)}
                    </label>
                    {field.type === "file" ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => handleUploadClick(field.id)}
                          className="rounded-md bg-blue-500 px-4 py-2 text-white"
                        >
                          Upload
                        </button>
                        {/* Display the image preview if available */}
                        {imagePreview && (
                          <div className="mt-2">
                            <Image
                              width={20}
                              height={20}
                              src={imagePreview}
                              alt="Image Preview"
                              className="h-auto w-full rounded-md"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.id] || ""}
                        onChange={(e) => handleInputChange(e, field.id)}
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Only render Tyre Details if tyre fields are available */}
          {tyreDetails.length > 0 && (
            <div className="rounded-md border p-4">
              <h3 className="text-lg font-semibold">Tyre Details</h3>
              {tyreDetails.map((tyre, index) => (
                <div key={index} className="space-y-2">
                  {Object.keys(tyre).map((key) => (
                    <div key={key} className="flex items-center">
                      <label htmlFor={key} className="w-1/3">
                        {capitalizeWords(key)}
                      </label>
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={tyre[key as keyof TyreDetail]}
                        onChange={(e) => handleInputChange(e, key, index)}
                        className="w-2/3 rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              ))}
              <button
                type="button"
                onClick={addTyreDetail}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                <FaPlus /> Add More Tyre Details
              </button>
            </div>
          )}

          {/* Submit and Cancel Buttons */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>

          <button
            type="button"
            className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
