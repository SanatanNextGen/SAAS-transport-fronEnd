import { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Import the Plus Icon from react-icons

interface TyreDetail {
  TyreNo: string;
  TyreType: string;
  Makers: string;
  FrontRear: string;
  FittedOn: string;
  BillNo: string;
  BillDate: string;
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
    // Create a file input element dynamically
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*"; // Accept only image files

    // Trigger the file input when the button is clicked
    input.click();

    // Handle the file selection when the user selects a file
    input.addEventListener("change", (event) => {
      const target = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
      if (target && target.files) {
        const file = target.files[0]; // Get the selected file
        if (file) {
          // Update only the specific field (fieldId) in formData for file upload
          setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldId]: file, // Update the file field only
          }));

          // Generate a preview URL for the image
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
    const { name, type, checked, value } = e.target;

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
    e.preventDefault(); // Prevent the default form submission
    const fullFormData = { ...formData, tyreDetails }; // Include tyre details in the form data
    onSubmit(fullFormData); // Pass the form data to the parent component
  };

  const addTyreDetail = () => {
    // Add a new empty tyre detail object when the user clicks the plus button
    const newTyreDetail: TyreDetail = {
      TyreNo: "",
      TyreType: "",
      Makers: "",
      FrontRear: "",
      FittedOn: "",
      BillNo: "",
      BillDate: "",
      StartKm: 0,
      EndKm: 0,
    };

    setTyreDetails([...tyreDetails, newTyreDetail]);
  };

  const capitalizeWords = (str: string) => {
    if (!str) return str;
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Check if any field is related to tyre details (based on the placeholder or name)
  const hasTyreDetailsField = fields.some(
    (field) =>
      (field.placeholder && field.placeholder.toLowerCase().includes("tyre")) ||
      (field.name && field.name.toLowerCase().includes("tyre")),
  );

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
          {fields.map((field) => (
            <div key={field.id} className="mb-4">
              {field.type === "file" ? (
                <div className="mb-1 text-left font-medium">
                  {capitalizeWords(field.name)}
                </div>
              ) : (
                <div className="mb-1 text-left font-medium">
                  {capitalizeWords(field.placeholder)}
                </div>
              )}
              {field.type === "file" ? (
                <div>
                  <button
                    type="button"
                    onClick={() => handleUploadClick(field.id)} // Ensure it's a button and not a form submission
                    className="rounded-md bg-blue-500 px-4 py-2 text-white"
                  >
                    Upload
                  </button>
                  {/* Display the image preview if available */}
                  {imagePreview && (
                    <div className="mt-2">
                      <img
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

          {/* Only render Tyre Details if fields contain tyre-related fields */}
          {hasTyreDetailsField && (
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold text-gray-700">
                Tyre Details
              </h3>
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
                <FaPlus /> {/* Plus Icon to add new tyre details */}
              </button>
            </div>
          )}

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
