"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FormModal from "../FormModal/FormModal";

const ConsigneeManagement = () => {
  const defaultData = {
    id: "",
    firstName: " ",
    lastName: " ",
    contact: {
      email: "",
      phone: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    gstin: "",
    bankDetails: {
      accountNumber: "",
      ifscCode: "",
      bankName: "",
    },
    Documents: {
      Documents: "",
    },
    createdAt: "",
    updatedAt: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [Data, setData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any>(null);

  // Fetching the JSON file
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/consignee.json");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (updatedData: any) => {
    const updatedDatas = Data.map((data) =>
      data.id === updatedData.id ? updatedData : data,
    );
    setData(updatedDatas);
    setIsEditModalOpen(false);
  };

  const handleDelete = (id: string) => {
    const updatedData = Data.filter((data) => data.id !== id);
    setData(updatedData);
  };

  const transformToFields = (data: any, parentKey: string = ""): any[] => {
    if (!data) return [];

    const fields: any[] = [];

    Object.keys(data).forEach((key) => {
      const value = data[key];
      const fieldName = parentKey ? `${parentKey}.${key}` : key;

      if (key === "id") return;

      if (key === "Documents") {
        // Handle documents as files
        Object.keys(value).forEach((doc: any, index: number) => {
          const docKey = `Document${doc}${index + 1}`;
          fields.push({
            id: `${fieldName}.${docKey}`,
            name: `Upload ${doc}`,
            type: "file",
            value: value[docKey],
            key: `${fieldName}.${docKey}`,
            accept: "application/pdf,image/*",
          });
        });
      }

      if (typeof value === "object" && value !== null) {
        fields.push(...transformToFields(value, fieldName));
      } else {
        fields.push({
          id: fieldName,
          name: fieldName,
          placeholder: `Enter ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`,
          type: getFieldType(value),
          value: value,
        });
      }
    });

    return fields;
  };

  const getFieldType = (value: any): string => {
    if (typeof value === "boolean") return "checkbox";
    if (typeof value === "number") return "number";
    return "text";
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
  };

  const handleEditData = (data: any) => {
    setSelectedData(data);
    setIsEditModalOpen(true);
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = [
      "ID",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Street",
      "City",
      "State",
      "Zip",
      "GSTIN",
      "Account Number",
      "IFSC Code",
      "Bank Name",
      "Created At",
      "Updated At",
    ];
    csvRows.push(headers.join(","));

    Data.forEach((item: any) => {
      const row = [
        item.id,
        item.firstName,
        item.lastName,
        item.contact.email,
        item.contact.phone,
        item.address.street,
        item.address.city,
        item.address.state,
        item.address.zip,
        item.gstin,
        item.bankDetails.accountNumber,
        item.bankDetails.ifscCode,
        item.bankDetails.bankName,
        item.createdAt,
        item.updatedAt,
      ];
      csvRows.push(row.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "consignor_records.csv");
    a.click();
    URL.revokeObjectURL(url);
  };

  const headers = Data.length > 0 ? Object.keys(Data[0]) : [];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Add Consignee Button */}
      <div className="flex justify-between">
        <div className="mb-6 text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-meta-3 px-6 py-3 text-center font-medium text-white hover:bg-opacity-90 sm:px-8 md:px-10"
            onClick={handleOpenModal}
          >
            Add Consignee
          </Link>
        </div>

        <div className="mb-6 text-center">
          <button
            className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-center font-medium text-white hover:bg-blue-600"
            onClick={downloadCSV}
          >
            Download Records
          </button>
        </div>
      </div>

      <div className="mt-4 w-[85vw] border border-stroke bg-white pb-4 pt-6 text-center shadow-default placeholder:rounded-sm dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:w-[60vw] lg:px-8 xl:w-[70vw] xl:pb-1">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="">
                <th className="border border-gray-200 px-4 py-2">Actions</th>
                {headers.map((header) => (
                  <th key={header} className="border border-gray-200 px-4 py-2">
                    {header.charAt(0).toUpperCase() + header.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Data &&
                Data.map((customer, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">
                      <div className="flex items-center  justify-center gap-4">
                        <button
                          onClick={() => handleEditData(customer)}
                          className="hover:text-primary "
                        >
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                              fill=""
                            />
                            <path
                              d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                              fill=""
                            />
                          </svg>
                        </button>

                        <button className="hover:text-red">
                          <svg
                            className="fill-current"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    {headers.map((header) => {
                      let value;
                      if (header.includes(".")) {
                        value = header
                          .split(".")
                          .reduce((o, i) => o[i], customer);
                      } else {
                        value = customer[header];
                      }

                      if (typeof value === "object" && value !== null) {
                        if (header === "contact") {
                          return (
                            <td
                              key={header}
                              className="border border-gray-200 px-4 py-2"
                            >
                              {value.email} / {value.phone}
                            </td>
                          );
                        }
                        // Check if the object is a document type and show the upload option
                        if (header === "document") {
                          return (
                            <td
                              key={header}
                              className="border border-gray-200 px-4 py-2"
                            >
                              <input
                                type="file"
                                accept="application/pdf,image/*"
                              />
                            </td>
                          );
                        }
                        return (
                          <td
                            key={header}
                            className="border border-gray-200 px-4 py-2"
                          >
                            {JSON.stringify(value)}
                          </td>
                        );
                      }

                      return (
                        <td
                          key={header}
                          className="border border-gray-200 px-4 py-2"
                        >
                          {value || ""}
                        </td>
                      );
                    })}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Rendering */}
      {isModalOpen && (
        <FormModal
          title={"Add New Vehicle"}
          onClose={handleCloseModal}
          fields={transformToFields(defaultData)}
          onSubmit={handleSubmit}
        />
      )}
      {isEditModalOpen && selectedData && (
        <FormModal
          title={"Edit Vehicle"}
          onClose={handleCloseModal}
          fields={transformToFields(selectedData)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default ConsigneeManagement;
