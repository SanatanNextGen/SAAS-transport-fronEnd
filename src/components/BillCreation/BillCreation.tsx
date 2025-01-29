"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Row {
  paymentMode?: string;
  debit?: string;
  credit?: string;
}

const FormPage: React.FC = () => {
  const [Data, setData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]); // Array to store selected bilties
  const [rows, setRows] = useState<Row[]>([{}]); // Explicit type for rows
  const [isOpen, setIsOpen] = useState(false);
  const [totals, setTotals] = useState({ debit: 0, credit: 0 }); // State to track totals

  // Handle adding a new row
  const addRow = () => {
    setRows([...rows, {}]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/billCreation.json");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const selectBuilty = () => {
    setIsOpen(!isOpen);
  };

  // Handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setSelectedData((prevSelectedData) => {
      if (prevSelectedData.some((selected) => selected.id === id)) {
        return prevSelectedData.filter((bilty) => bilty.id !== id); // Remove if already selected
      } else {
        const selectedBilty = Data.find((bilty) => bilty.id === id);
        return [...prevSelectedData, selectedBilty]; // Add if not selected
      }
    });
  };

  // Handle input changes for selected data
  const handleInputChange = (
    index: number,
    field: string,
    value: string,
    type: "debit" | "credit",
  ) => {
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value,
    };

    setRows(updatedRows);

    // Update the totals
    let debitTotal = 0;
    let creditTotal = 0;

    updatedRows.forEach((row) => {
      if (row.debit) debitTotal += parseFloat(row.debit) || 0;
      if (row.credit) creditTotal += parseFloat(row.credit) || 0;
    });

    setTotals({ debit: debitTotal, credit: creditTotal });
  };

  return (
    <>
      <div className="mb-6 flex flex-col items-center text-center">
        <button
          onClick={selectBuilty}
          className="hover:bg-primary-dark rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Select the Advance Payment Voucher for bill creation
        </button>

        {isOpen && (
          <div className="dark:bg-dark-bg mt-4 h-[35vw] w-full max-w-xs overflow-y-auto rounded-lg bg-white p-4 shadow-lg xl:h-[10vw]">
            {Data.map((bilty) => (
              <div
                key={bilty.id}
                className=" mb-3 flex items-center space-x-3 "
              >
                <input
                  type="checkbox"
                  id={`bilty-${bilty.id}`}
                  checked={selectedData.some(
                    (selected) => selected.id === bilty.id,
                  )}
                  onChange={() => handleCheckboxChange(bilty.id)}
                  className="h-5 w-5 rounded-md text-primary focus:ring-2 focus:ring-primary dark:text-secondary dark:focus:ring-secondary"
                />
                <label
                  htmlFor={`bilty-${bilty.id}`}
                  className="font-medium text-black "
                >
                  {bilty.biltyNo}
                </label>
              </div>
            ))}
          </div>
        )}
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
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"></div>

              <div className="mb-6 overflow-x-auto border-b border-gray-300 pb-6">
                <table className="w-full border-collapse text-sm text-gray-800">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="p-4">Challan No</th>
                      <th className="p-4">Bilty No</th>
                      <th className="p-4">Bilty Date</th>
                      <th className="p-4">Vehicle No</th>
                      <th className="p-4">Advance Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedData.map((bilty) => (
                      <tr
                        key={bilty.id}
                        className="transition duration-200 hover:bg-gray-50"
                      >
                        <td className="p-4">{bilty.id}</td>
                        <td className="p-4">{bilty.biltyNo}</td>
                        <td className="p-4">{bilty.biltyDate}</td>
                        <td className="p-4">
                          {bilty.shipmentDetails.vehicleNo}
                        </td>
                        <td className="p-4">
                          <input placeholder="Enter the Advance Amount " />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full max-w-7xl rounded-lg bg-white shadow-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="p-3 text-sm text-gray-700">
                          Payment Mode
                        </th>
                        <th className="p-3 text-sm text-gray-700">Debit</th>
                        <th className="p-3 text-sm text-gray-700">Credit</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {rows.map((_, rowIndex) => (
                        <tr key={rowIndex}>
                          {Array.from({ length: 3 }).map((_, index) => {
                            const fieldName =
                              index === 0
                                ? "paymentMode"
                                : index === 1
                                  ? "debit"
                                  : "credit";

                            return (
                              <td
                                key={index}
                                className="relative border border-gray-300 p-3"
                              >
                                <div className="flex items-center justify-between">
                                  <input
                                    type="text"
                                    className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                                    placeholder=""
                                    value={rows[rowIndex][fieldName] || ""}
                                    onChange={(e) =>
                                      handleInputChange(
                                        rowIndex,
                                        fieldName,
                                        e.target.value,
                                        fieldName === "debit"
                                          ? "debit"
                                          : "credit",
                                      )
                                    }
                                  />
                                  {/* Display the "+" button outside the input box */}
                                  {index === 2 &&
                                    rowIndex === rows.length - 1 && (
                                      <button
                                        onClick={addRow}
                                        className="ml-2 p-2 text-3xl font-bold text-gray-600"
                                      >
                                        +
                                      </button>
                                    )}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>

                    <tfoot className="bg-gray-200">
                      <tr>
                        <th className="p-3 text-sm text-gray-700">Total</th>
                        <td className="p-3">{totals.debit.toFixed(2)}</td>
                        <td className="p-3">{totals.credit.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Submit Button (optional) */}
              <div className="mt-8 items-center text-center">
                <button className="rounded-md bg-blue-600 px-6 py-3 text-lg text-white shadow-md hover:bg-blue-700 focus:outline-none">
                  Submit Challan
                </button>
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
