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
        Money Receipt
      </div>

      {/* Main Wrapper */}
      <div className=" w-[85vw]  max-w-7xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Top Table Section */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full table-auto border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm text-gray-700">No.</th>
                <th className="p-3 text-sm text-gray-700">Bill No</th>
                <th className="p-3 text-sm text-gray-700">Bill Date</th>
                <th className="p-3 text-sm text-gray-700">Customer Name</th>
                <th className="p-3 text-sm text-gray-700">Frieght Amount</th>
                <th className="p-3 text-sm text-gray-700">CGST 6%</th>
                <th className="p-3 text-sm text-gray-700">SGST 6%</th>
                <th className="p-3 text-sm text-gray-700">IGST 12%</th>
                <th className="p-3 text-sm text-gray-700">Total Freight</th>
                <th className="p-3 text-sm text-gray-700">
                  On Account Payment
                </th>
                <th className="p-3 text-sm text-gray-700">
                  Damage/Claim Deduct
                </th>
                <th className="p-3 text-sm text-gray-700">TDS</th>
                <th className="p-3 text-sm text-gray-700">Final Received</th>
                <th className="p-3 text-sm text-gray-700"> Received Date</th>
                <th className="p-3 text-sm text-gray-700"> Remarks</th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {rows.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 15 }).map((_, index) => (
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
                        {index === 14 && rowIndex === rows.length - 1 && (
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
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3">1,000</td>
                <td className="p-3"></td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
                <td className="p-3">1,01,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="mt-4 w-full max-w-7xl rounded-lg bg-white p-4 shadow-lg">
        <div className="overflow-x-auto text-center ">
          <div className="flex items-center gap-4 text-center font-semibold">
            <p>Final Receive Amount :</p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
              placeholder=""
            />
          </div>

          <div className="mt-4 flex items-center gap-4 text-center font-semibold">
            <p>Final Receive Amount in words :</p>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 text-center text-sm"
              placeholder=""
            />
          </div>
          <table className="mt-4 min-w-full table-auto border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 text-sm text-gray-700">Checked By</th>
                <th className="p-3 text-sm text-gray-700">Account Head</th>
                <th className="p-3 text-sm text-gray-700">Authorized Sign</th>
              </tr>
            </thead>
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
