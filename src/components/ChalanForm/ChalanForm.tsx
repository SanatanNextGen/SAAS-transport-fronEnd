import Image from "next/image";
import React from "react";

const FormPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-[92vw] items-center justify-center bg-gray-50 p-10 xl:w-[75vw]">
      <div className="font-sans overflow-x-auto rounded-lg border border-gray-300 bg-white text-gray-800 shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between rounded-t-lg border-b border-gray-300 bg-blue-50 p-6">
          <div className="flex items-center">
            <Image
              className="rounded-md"
              width={200} // Adjusted for better size
              height={100} // Adjusted for better size
              src={"/images/logo/sanatan-logo.png"}
              alt="Logo"
              priority
            />
          </div>
          <div className="flex-1 px-6 text-center">
            <h1 className="text-2xl font-semibold uppercase text-blue-700">
              Sanatan Express India Pvt. Ltd.
            </h1>
            <p className="text-sm text-gray-600">
              PAN No: ABKCS2779J | GSTIN: 23ABKCS2779J1ZV
            </p>
            <p className="text-sm text-gray-600">
              Shop No 10, 1st Floor, Plot No 888, Loha Mandi, Dewas Naka, Indore
              452010
            </p>
            <p className="text-sm text-gray-600">
              Mobile: 9782760844 | Email: proprie@sanatanexpress.in
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 text-sm">
          {/* Top Section */}
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* First Section */}

            {/* Second Section */}
            <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4 text-center">
                <label className="text-xl font-semibold text-blue-700">
                  Copy
                </label>
                <div className="my-4 border-b-2 border-gray-300"></div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Branch:</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Company"
                  />
                </div>
              </div>
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
                  <label className="font-semibold text-gray-700">Date:</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Date"
                  />
                  <div className="my-4 border-b-2 border-gray-300"></div>
                </div>

                <div className="flex flex-col space-y-4">
                  <label className="font-semibold text-gray-700">
                    Vehicle No:
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Vehicle No"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-6 sm:flex-row">
            <label className="font-semibold text-gray-700">Loading Stn:</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Vehicle No"
            />

            <label className="font-semibold text-gray-700">Delivery Stn:</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Vehicle No"
            />
          </div>

          <div className="mb-4 border-b border-gray-300 pb-2">
            <table className="w-1/2 border-collapse border border-gray-300 text-center xl:w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Bilty No</th>
                  <th className="border border-gray-300 p-2">Bity Date</th>
                  <th className="border border-gray-300 p-2">
                    Nature Of Goods
                  </th>
                  <th className="border border-gray-300 p-2">No Of Packages</th>
                  <th className="border border-gray-300 p-2">Desp. Weight</th>
                  <th className="border border-gray-300 p-2">Exp. Del. Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                    <input
                      type="text"
                      className="  border  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Footer Section */}
          <div className="mt-8 rounded-lg bg-gray-100 p-6 shadow-md">
            <div className="flex flex-col justify-between text-sm">
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Invoice Number:
                </label>
                <input
                  type="text"
                  className="w-1/2 rounded-lg border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Value:</label>
                <input
                  type="text"
                  className="w-1/2 rounded-lg border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500"
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
  );
};

export default FormPage;
