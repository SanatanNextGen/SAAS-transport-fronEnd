"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FormPage: React.FC = () => {
  const [Data, setData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]); // Array to store selected bilties
  const [rows, setRows] = useState([{}]);

  // Handle adding a new row
  const addRow = () => {
    setRows([...rows, {}]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/bilty.json");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setSelectedData((prevSelectedData) => {
      if (prevSelectedData.some((bilty) => bilty.id === id)) {
        return prevSelectedData.filter((bilty) => bilty.id !== id); // Remove if already selected
      } else {
        const selectedBilty = Data.find((bilty) => bilty.id === id);
        return [...prevSelectedData, selectedBilty]; // Add if not selected
      }
    });
  };

  return (
    <>
      <div className="P mb-6 flex flex-col items-center text-center ">
        <label className="text-lg font-semibold text-white">
          Select the Bilty for creating Chalan
        </label>
        <div className="mt-2">
          {Data.map((bilty) => (
            <div key={bilty.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`bilty-${bilty.id}`}
                checked={selectedData.some(
                  (selected) => selected.id === bilty.id,
                )}
                onChange={() => handleCheckboxChange(bilty.id)}
                className="h-4 w-4 rounded"
              />
              <label htmlFor={`bilty-${bilty.id}`} className="text-white">
                {bilty.biltyNo}
              </label>
            </div>
          ))}
        </div>
      </div>

      {selectedData.length > 0 ? (
        <div className="flex min-h-screen w-[92vw] items-center justify-center bg-gray-50 p-6 xl:w-[75vw]">
          <div className="font-sans overflow-x-auto rounded-lg border border-gray-300 bg-white text-gray-800 shadow-lg">
            {/* Header Section */}
            <div className="flex items-center justify-between rounded-t-lg border-b border-gray-300 bg-blue-50 p-6">
              <div className="flex items-center">
                <Image
                  className="rounded-md"
                  width={200}
                  height={100}
                  src={"/images/logo/sanatan-logo.png"}
                  alt="Logo"
                  priority
                />
              </div>
              <div className="flex-1 px-6 text-center">
                <h1 className="text-2xl font-semibold uppercase text-blue-700">
                  Sanatan Express India Pvt. Ltd.
                </h1>
                <p className="text-xs text-gray-600">
                  PAN No: ABKCS2779J | GSTIN: 23ABKCS2779J1ZV
                </p>
                <p className="text-xs text-gray-600">
                  Shop No 10, 1st Floor, Plot No 888, Loha Mandi, Dewas Naka,
                  Indore 452010
                </p>
                <p className="text-xs text-gray-600">
                  Mobile: 9782760844 | Email: proprie@sanatanexpress.in
                </p>
              </div>
            </div>

            {/* Form Body */}
            <div className="space-y-8 p-6 text-sm">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* First Section */}
                {/* Second Section */}
                <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="mb-4 text-center">
                    <label className="text-xl font-semibold text-blue-700">
                      Copy
                    </label>
                    <div className="my-4 border-b-2 border-gray-300"></div>
                  </div>
                  {selectedData.map((bilty, index) => (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col">
                        <label className="font-semibold text-gray-700">
                          Branch:
                        </label>
                        <input
                          type="text"
                          value={bilty ? bilty.companyDetails.name : ""}
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter Branch"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Third Section */}
                <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="mb-4">
                    <div className="flex flex-col space-y-4">
                      <label className="font-semibold text-gray-700">
                        Serial No:
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Serial No"
                      />
                      <div className="my-4 border-b-2 border-gray-300"></div>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <label className="font-semibold text-gray-700">
                        Date:
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="my-4 border-b-2 border-gray-300"></div>
                    </div>
                    {selectedData.map((bilty, index) => (
                      <div className="flex flex-col space-y-4">
                        <label className="font-semibold text-gray-700">
                          Vehicle No:
                        </label>
                        <input
                          type="text"
                          value={bilty ? bilty.shipmentDetails.vehicleNo : ""}
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter Vehicle No"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {selectedData.map((bilty, index) => (
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="flex flex-col sm:w-1/2">
                    <label className="font-semibold text-gray-700">
                      Loading Stn:
                    </label>
                    <input
                      type="text"
                      value={bilty ? bilty.transportDetails.from : ""}
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Loading Station"
                    />
                  </div>

                  <div className="flex flex-col sm:w-1/2">
                    <label className="font-semibold text-gray-700">
                      Delivery Stn:
                    </label>
                    <input
                      type="text"
                      value={bilty ? bilty.transportDetails.to : ""}
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Delivery Station"
                    />
                  </div>
                </div>
              ))}
              <div className="mb-4 border-b border-gray-300 pb-2">
                <table className="w-full border-collapse text-center">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 p-3">Bilty No</th>
                      <th className="border border-gray-300 p-3">Bilty Date</th>
                      <th className="border border-gray-300 p-3">
                        Nature Of Goods
                      </th>
                      <th className="border border-gray-300 p-3">
                        No Of Packages
                      </th>
                      <th className="border border-gray-300 p-3">
                        Desp. Weight
                      </th>
                      <th className="border border-gray-300 p-3">
                        Exp. Del. Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {selectedData.map((bilty, index) => (
                      <tr key={bilty.id}>
                        <td className="border border-gray-300 p-3">
                          <input
                            type="text"
                            value={bilty.biltyNo}
                            className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-gray-300 p-3">
                          <input
                            type="text"
                            value={bilty.biltyDate}
                            className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-gray-300 p-3">
                          <input
                            type="text"
                            value={bilty.natureOfGoods}
                            className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-gray-300 p-3">
                          <input
                            type="text"
                            value={bilty.items.length}
                            className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-gray-300 p-3">
                          <input
                            type="text"
                            value={bilty.weight}
                            className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-gray-300 p-3">
                          <input
                            type="text"
                            value={bilty.shipmentDetails.expDelDate}
                            className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                            readOnly
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Section */}
              <div className="mt-8 rounded-lg bg-gray-100 p-6 shadow-md">
                <div className="flex flex-col space-y-6 text-sm sm:flex-row sm:justify-between sm:space-y-0">
                  <div className="flex flex-col sm:w-1/3">
                    <label className="font-semibold text-gray-700">
                      Invoice Number:
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>

                  <div className="flex flex-col sm:w-1/3">
                    <label className="font-semibold text-gray-700">
                      Value:
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Goods consigned in the name of the consignee mentioned in the
                  receipt. Subject to Indore jurisdiction only.
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Signature of the Loading Supervisor:
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          Select Bilty(s) to view details.
        </div>
      )}
    </>
  );
};

export default FormPage;
