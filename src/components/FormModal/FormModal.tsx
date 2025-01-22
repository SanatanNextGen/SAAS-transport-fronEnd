import { useState } from "react";

interface Field {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  value: string | number | boolean; // Added value to handle pre-filled data
}

interface FormModalProps {
  title: string;
  onClose: () => void;
  fields: Field[];
  onSubmit: (formData: { [key: string]: any }) => void; // onSubmit now takes form data
}

export default function FormModal({
  onClose,
  fields,
  title,
  onSubmit,
}: FormModalProps) {
  console.log("🚀 ~ fields:", fields);
  // Create a state object to manage form values
  const [formData, setFormData] = useState<{ [key: string]: any }>(
    fields.reduce(
      (acc, field) => {
        acc[field.id] = field.value || ""; // Initialize form data with pre-filled values or empty strings
        return acc;
      },
      {} as { [key: string]: any },
    ),
  );

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // For other types, set the string or number value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    onSubmit(formData); // Pass the form data to the parent component
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 text-black">
      <div className="relative mx-4 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="text-right font-extrabold " onClick={onClose}>
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
              <div className="text-left mb-1 font-medium">{field.placeholder}</div>
              {field.type === "checkbox" ? (
                // Checkbox input for boolean values
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={field.id}
                    name={field.name}
                    checked={formData[field.id] || false} // Handle the boolean value
                    onChange={handleInputChange}
                    className="h-5 w-5 rounded-md border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                  <label
                    htmlFor={field.id}
                    className="ml-2 text-sm text-gray-600"
                  >
                    {field.placeholder}
                  </label>
                </div>
              ) : (
                // Other types of input fields (text, number, etc.)
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.id] || ""} // Set input value from state
                  onChange={handleInputChange} // Track changes to the input
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSubmit}
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
