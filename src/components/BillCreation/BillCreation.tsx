"use client";
import React, { useState } from "react";

const MoneyReceipt = () => {
  // Initialize state for rows
  const [rows, setRows] = useState([{}]);

  // Handle adding a new row
  const addRow = () => {
    setRows([...rows, {}]);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-6">
      <div className="mb-8 text-3xl font-extrabold text-gray-800">
        Bill Creation
      </div>

      {/* Main Wrapper */}
      <div className=" w-[85vw]  max-w-7xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Top Table Section */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm text-gray-700">No.</th>
                <th className="p-3 text-sm text-gray-700">Invoice No</th>
                <th className="p-3 text-sm text-gray-700">Invoice Date</th>
                <th className="p-3 text-sm text-gray-700">Party Ledger</th>
                <th className="p-3 text-sm text-gray-700">Cash/Bank Ledger</th>
                <th className="p-3 text-sm text-gray-700">Invoice Amount</th>
                <th className="p-3 text-sm text-gray-700">TDS Ledger</th>
                <th className="p-3 text-sm text-gray-700">TDS Amount</th>
                <th className="p-3 text-sm text-gray-700">Receipt Amount</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {rows.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 9 }).map((_, index) => (
                    <td
                      key={index}
                      className="relative border border-gray-300 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                          placeholder=""
                        />
                        {/* Display the "+" button outside the input box */}
                        {index === 8 && rowIndex === rows.length - 1 && (
                          <button
                            onClick={addRow}
                            className="ml-2 p-2 text-3xl font-bold text-gray-600"
                          >
                            +
                          </button>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm text-gray-700">Total</th>
                <td className="p-3">1,000</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3">1,000</td>
                <td className="p-3"></td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bottom Table Section */}
      {/* Bottom Table Section */}
      <div className="w-full max-w-7xl rounded-lg bg-white shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm text-gray-700">Particular</th>
                <th className="p-3 text-sm text-gray-700">Debit</th>
                <th className="p-3 text-sm text-gray-700">Credit</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <td
                      key={index}
                      className="relative border border-gray-300 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
                          placeholder=""
                        />
                        {/* Display the "+" button outside the input box */}
                        {index === 2 && rowIndex === rows.length - 1 && (
                          <button
                            onClick={addRow}
                            className="ml-2 p-2 text-3xl font-bold text-gray-600"
                          >
                            +
                          </button>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm text-gray-700">Total</th>
                <td className="p-3">1,000</td>
                <td className="p-3">1,01,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Submit Button (optional) */}
      <div className="mt-8">
        <button className="rounded-md bg-blue-600 px-6 py-3 text-lg text-white shadow-md hover:bg-blue-700 focus:outline-none">
          Submit Receipt
        </button>
      </div>
    </div>
  );
};

export default MoneyReceipt;
