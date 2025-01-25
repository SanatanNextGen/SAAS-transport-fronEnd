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
            <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-lg font-semibold">
                    PAN No: ABKCS2779J
                  </label>
                  <label className="text-lg font-semibold">
                    GSTIN: 23ABKCS2779J1ZV
                  </label>
                </div>
                <div className="my-4 border-b-2 border-gray-300"></div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Eway Bill No:
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Eway Bill No"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Expiry Date:
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Expiry Date"
                  />
                </div>
              </div>
            </div>

            {/* Second Section */}
            <div className="rounded-lg border border-gray-300 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4 text-center">
                <label className="text-xl font-semibold text-blue-700">
                  Copy
                </label>
                <div className="my-4 border-b-2 border-gray-300"></div>
                <label className="text-xl font-semibold text-blue-700">
                  At Owner&apos;s Risk/Insurance
                </label>
                <div className="my-4 border-b-2 border-gray-300"></div>
              </div>

              <div className="text-sm font-medium text-gray-700">
                <div className="mb-2">The Consignor has stated that</div>

                {/* Not insured consignment */}
                <div className="mb-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="notInsured"
                    className="h-5 w-5 text-blue-500"
                  />
                  <label htmlFor="notInsured" className="font-medium">
                    He has not insured consignment
                  </label>
                </div>

                {/* Insured consignment */}
                <div className="mb-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="insured"
                    className="h-5 w-5 text-blue-500"
                  />
                  <label htmlFor="insured" className="font-medium">
                    He has insured consignment
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">
                    Company:
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Company"
                  />
                  <label className="font-semibold text-gray-700">
                    Policy No:
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Policy No"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">Date:</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Date"
                  />
                  <label className="font-semibold text-gray-700">Amount:</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Amount"
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

          {/* Consignor and Consignee Details */}
          <div className="mb-8 flex flex-col gap-6 sm:flex-row">
            <div className="w-full sm:w-2/3">
              {/* Consignor Section */}
              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">
                  Consignor&apos;s Name & Address :
                </label>
                <textarea
                  className="rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter Consignor's Name & Address"
                ></textarea>
                <input
                  type="text"
                  placeholder="Enter GSTIN No"
                  className="mt-2 h-10 w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Consignee Section */}
              <div className="mt-6 flex flex-col">
                <label className="font-semibold text-gray-700">
                  Consignee&apos;s Name & Address:
                </label>
                <textarea
                  className="rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Enter Consignee's Name & Address"
                ></textarea>
                <input
                  type="text"
                  placeholder="Enter GSTIN No"
                  className="mt-2 h-10 w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Section: Serial No. and Date */}
            <div className="w-full rounded-lg border border-gray-300 p-6 shadow-md transition-shadow duration-300 hover:shadow-lg sm:w-1/3">
              <div className="flex flex-col gap-6">
                {/* Serial No. */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">From:</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="From"
                  />
                  <div className="my-4 border-b-2 border-gray-300"></div>
                </div>

                {/* Date */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700">To:</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm transition-colors focus:ring-2 focus:ring-blue-500"
                    placeholder="To"
                  />
                  <div className="my-4 border-b-2 border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>

             <div className="mb-4 border-b border-gray-300 pb-2">
            <table className="w-1/2 xl:w-full border-collapse border border-gray-300 text-center">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Package</th>
                  <th className="border border-gray-300 p-2">Description</th>
                  <th className="border border-gray-300 p-2">
                    <div className="flex flex-col">
                      <span>Weight</span>
                      <div className="flex justify-center">
                        <span>Actual</span>
                        <div className="mx-2 h-8 border-r border-gray-300"></div>
                        <span className="ml-2">Charged</span>
                      </div>
                    </div>
                  </th>
                  <th className="border border-gray-300 p-2">
                    <div className="flex flex-col">
                      <span className="ml-2">Amount</span>
                    </div>
                  </th>
                  <th className="border border-gray-300 p-2">
                    <div className="flex flex-col">
                      <span className="ml-2">GSTIN</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  border-gray-300 p-2">
                    <input
                      type="text"
                      className=" border h-[350px]  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className=" border  h-[350px]  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className=" border  h-[350px]  border-gray-300 p-1 text-center"
                      placeholder=""
                    />
                  </td>

                  <td className="w-full border border-gray-300 p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <label className="font-semibold">Freight:</label>

                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold"> Local Coll:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">Labour:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">Halting Chrage:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">Total Freight:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">To Be Billed:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">To Pay:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </td>

                  <td className="w-full border border-gray-300 p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <label className="font-semibold">Total Freight:</label>

                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold"> CGST @ 6%:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">SGST @ 6%:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold"> IGST @ 6%:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">Grand Total:</label>
                        <input
                          type="text"
                          className=" border border-gray-300 p-1 text-center"
                          placeholder=""
                        />
                      </div>

                      <div className="flex justify-between">
                        <label className="font-semibold">
                          GST Payable by Tick the relevant box :
                        </label>
                      </div>

                      <div className="mb-4 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="notInsured"
                          className="h-5 w-5"
                        />
                        <label htmlFor="notInsured" className="font-medium">
                          Consignor
                        </label>
                      </div>
                      <div className="mb-4 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="notInsured"
                          className="h-5 w-5"
                        />
                        <label htmlFor="notInsured" className="font-medium">
                          Consignee
                        </label>
                      </div>
                      <div className="mb-4 flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="notInsured"
                          className="h-5 w-5"
                        />
                        <label htmlFor="notInsured" className="font-medium">
                          Transporter
                        </label>
                      </div>
                    </div>
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
                  className="rounded-lg w-1/2 border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-gray-700">Value:</label>
                <input
                  type="text"
                  className="rounded-lg w-1/2 border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500"
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
