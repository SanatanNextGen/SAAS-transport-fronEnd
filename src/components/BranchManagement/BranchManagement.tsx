"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FormModal from "../FormModal/FormModal";

const VehicleManagement = () => {
  const defaultData = {
    branchId: "",
    branchName: " ",
    builtyNumberFrom: "",
    builtyNumberTo: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    contact: {
      phone: "",
      email: "",
    },
    branchManager: {
      managerName: " ",
      managerContact: "",
      managerPhone: "",
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [Data, setData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any>(null); // New state for the selected vehicle

  // Fetching the JSON file
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/branch.json");
      const data = await response.json();
      setData(data); // Assuming this is an array of vehicles
    };

    fetchData();
  }, []);

  const handleSubmit = (updatedData: any) => {
    console.log("Updated  Data:", updatedData);

    // Update the Data state with the edited data
    const updatedDatas = Data.map((data) =>
      data.id === updatedData.id ? updatedData : data,
    );
    setData(updatedDatas); // Update the state with new vehicle data

    setIsEditModalOpen(false); // Close the edit modal
  };

  const transformToFields = (data: any, parentKey: string = ""): any[] => {
    if (!data) return [];

    const fields: any[] = [];

    // Iterate over each key-value pair in the Data
    Object.keys(data).forEach((key) => {
      const value = data[key];
      const fieldName = parentKey ? `${parentKey}.${key}` : key;

      if (key === "id") return;
      // If the value is an object (and not null), call the function recursively
      if (typeof value === "object" && value !== null) {
        // Recursively handle nested objects
        fields.push(...transformToFields(value, fieldName));
      } else {
        // Otherwise, handle the simple property
        fields.push({
          id: fieldName,
          name: fieldName,
          placeholder: `Enter ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`, // Dynamically set the placeholder
          type: getFieldType(value), // Dynamically determine the input type
          value: formatDate(value), // Format date fields to match input date format
        });
      }
    });

    return fields;
  };

  // Helper function to determine the input field type
  const getFieldType = (value: any): string => {
    if (typeof value === "boolean") return "checkbox"; // Boolean values will map to checkboxes
    if (typeof value === "number") return "number"; // Number values will map to number input
    if (value instanceof Date || !isNaN(Date.parse(value))) return "date"; // Dates will map to date input
    return "text"; // Default type for strings is text
  };

  // Helper function to format date fields
  const formatDate = (value: any): any => {
    if (value instanceof Date) {
      return new Date(); // Format to YYYY-MM-DD
    }
    if (value && !isNaN(Date.parse(value))) {
      return new Date(value).toISOString().split("T")[0]; // Format string date to YYYY-MM-DD
    }
    return value;
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false); // Close the edit modal when closing the modal
  };

  const handleEditData = (data: any) => {
    setSelectedData(data); // Set the selected data to show in the edit modal
    setIsEditModalOpen(true); // Open the edit modal for editing
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Add Vehicle Button */}
      <div className="mb-6 text-center">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-meta-3 px-6 py-3 text-center font-medium text-white hover:bg-opacity-90 sm:px-8 md:px-10"
          onClick={handleOpenModal}
        >
          Add Branch
        </Link>
      </div>

      {/* Table Section */}
      <div className="mt-4 rounded-sm border border-stroke bg-white pb-4 pt-6 text-center shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:px-8 xl:pb-1">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-2 dark:bg-meta-4">
                <th className="px-4 py-4 text-sm font-medium text-black dark:text-white sm:text-base xl:pl-11">
                  Branch Name
                </th>
                <th className="px-4 py-4 text-sm font-medium text-black dark:text-white sm:text-base">
                  Branch Address
                </th>
                <th className="px-4 py-4 text-sm font-medium text-black dark:text-white sm:text-base">
                  Branch Builty
                </th>
                <th className="px-4 py-4 text-sm font-medium text-black dark:text-white sm:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Data &&
                Data.map((item: any, key: any) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] px-4 py-5 sm:px-6 lg:px-8 xl:pl-11">
                      <h5 className="text-sm font-medium text-black dark:text-white sm:text-base">
                        {item.branchName}
                      </h5>
                      <p className="text-xs sm:text-sm">{item.branchId}</p>
                    </td>
                    <td className="border-b  border-[#eee] px-4 py-5 sm:px-6 lg:px-8">
                      <p className="break-words text-sm text-black dark:text-white sm:text-base">
                        {item.address.street}, {item.address.city},{" "}
                        {item.address.state}, {item.address.postalCode},{" "}
                        {item.address.country}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 sm:px-6 lg:px-8">
                      <p className="text-sm text-black dark:text-white sm:text-base">
                        {item.builtyNumberFrom} - {item.builtyNumberTo}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-center gap-4">
                        <button
                          className="hover:text-primary"
                          onClick={() => handleEditData(item)}
                        >
                          {/* Edit Icon */}
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z" />
                            <path d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z" />
                          </svg>
                        </button>

                        <button className="hover:text-primary">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                              fill=""
                            />
                            <path
                              d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                              fill=""
                            />
                            <path
                              d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                              fill=""
                            />
                            <path
                              d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                              fill=""
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              {isModalOpen && Data && (
                <FormModal
                  title={"Add New Branch"}
                  onClose={handleCloseModal}
                  fields={transformToFields(defaultData)}
                  onSubmit={handleSubmit} // Handle form submission
                />
              )}
              {isEditModalOpen && selectedData && (
                <FormModal
                  title={"Edit Branch"}
                  onClose={handleCloseModal}
                  fields={transformToFields(selectedData)}
                  onSubmit={handleSubmit} // Handle form submission
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleManagement;
