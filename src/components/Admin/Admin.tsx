"use client";
import React, { useState } from "react";
import vehicleData from "../../data/vehicle.json"; // Import vehicle data
import branchData from "../../data/branch.json"; // Import branch data
import employeeData from "../../data/employee.json"; // Import employee data
import Modal from "../Modal/modal";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("vehicles");
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(""); // New state for form type
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const closeModal = () => setShowModal(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`${formType} added!`);
    closeModal(); // Close modal after submission
  };

  const openModal = (type: any) => {
    setFormType(type);
    setShowModal(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-700">Admin Dashboard</h1>
          <button className="p-2 text-gray-700 md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        <ul
          className={`flex flex-col space-y-2 border-b-2 border-gray-200 pb-2 md:flex-row md:space-x-6 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["vehicles", "branches", "employees"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer px-4 pb-2 text-lg font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-700"
              } transition duration-300 hover:text-blue-500`}
              onClick={() => {
                setActiveTab(tab);
                setIsMenuOpen(false); // Close menu on tab click
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Management
            </li>
          ))}
        </ul>

        <div className="mt-4">
          {activeTab === "vehicles" && (
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-700">
                Manage Vehicles
              </h3>
              <button
                onClick={() => openModal("vehicle")}
                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
              >
                Add New Vehicle
              </button>

              <div className="mt-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-700">
                  Existing Vehicles
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse overflow-hidden rounded-lg bg-white shadow-md">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        {[
                          "ID",
                          "Name",
                          "Owner",
                          "Owner Contact",
                          "Registration No",
                          "Fuel Type",
                          "Mileage",
                          "Condition",
                          "Status",
                          "Capacity",
                        ].map((header) => (
                          <th
                            key={header}
                            className="px-4 py-2 text-left text-sm md:text-base"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {vehicleData.map((vehicle) => (
                        <tr
                          key={vehicle.id}
                          className="text-center transition duration-300 hover:bg-gray-50"
                        >
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.id}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.name}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle?.owner}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.ownerContact}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.registration.number}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.fuel.type}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.odometer.mileage} km/ltr
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.status.condition}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.status.availability
                              ? "Available"
                              : "Not Available"}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {vehicle.fuel.tankCapacity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "branches" && (
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Manage Branches
              </h3>
              <button
                onClick={() => openModal("branch")}
                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
              >
                Add New Branch
              </button>

              <div className="mt-4">
                <h3 className="mb-4 text-xl font-semibold">
                  Existing Branches
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse overflow-hidden rounded-lg bg-white shadow-md">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        {[
                          "ID",
                          "Name",
                          "Address",
                          "Branch Manager",
                          "Built Number",
                        ].map((header) => (
                          <th
                            key={header}
                            className="px-4 py-2 text-left text-sm md:text-base"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {branchData.map((branch) => (
                        <tr
                          key={branch.branchId}
                          className="transition duration-300 hover:bg-gray-50"
                        >
                          <td className="border-b px-4 py-2 text-gray-700">
                            {branch.branchId}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {branch.branchName}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">{`${branch.address.street}, ${branch.address.city}, ${branch.address.state} ${branch.address.postalCode}, ${branch.address.country}`}</td>
                          <td className="border-b px-4 py-2 text-gray-700">{`${branch.branchManager.managerName} - ${branch.branchManager.managerContact}`}</td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {branch.builtyNumberFrom} - {branch.builtyNumberTo}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "employees" && (
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-700">
                Manage Employees
              </h3>
              <button
                onClick={() => openModal("employee")}
                className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
              >
                Add New Employee
              </button>

              <div className="mt-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-700">
                  Existing Employees
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse overflow-hidden rounded-lg bg-white shadow-md">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        {[
                          "ID",
                          "Name",
                          "Date of Birth",
                          "Phone",
                          "Email",
                          "Role",
                          "Hire Date",
                          "Emergency Contact",
                        ].map((header) => (
                          <th
                            key={header}
                            className="px-4 py-2 text-left text-sm md:text-base"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {employeeData.map((employee) => (
                        <tr
                          key={employee.employeeId}
                          className="hover:bg-gray-50"
                        >
                          <td className="border-b px-4 py-2 text-gray-700">
                            {employee.employeeId}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">{`${employee.firstName} ${employee.lastName}`}</td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {employee.dob}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {employee.contact.phone}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {employee.contact.email}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {employee.position.title}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">
                            {employee.position.hireDate}
                          </td>
                          <td className="border-b px-4 py-2 text-gray-700">{`${employee.emergencyContact.name} - ${employee.emergencyContact.phone}`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Component */}
        <Modal
          isOpen={showModal}
          closeModal={closeModal}
          title={`Add New ${formType.charAt(0).toUpperCase() + formType.slice(1)}`}
          onSubmit={handleSubmit}
          submitText={`Add ${formType.charAt(0).toUpperCase() + formType.slice(1)}`}
          cancelText="Cancel"
          className="max-w-2xl"
        >
          {/* Dynamic Form Content */}
          {formType === "vehicle" && (
            <div className="">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "Vehicle Name",
                  "Vehicle Type",
                  "Mileage",
                  "Fuel Type",
                  "Fuel Tank Capacity",
                  "Odometer Reading",
                  "Owner Name",
                  "Owner Contact",
                ].map((placeholder) => (
                  <div key={placeholder} className="space-y-2">
                    <label
                      htmlFor={placeholder.replace(" ", "-").toLowerCase()}
                      className="text-sm font-medium text-gray-600"
                    >
                      {placeholder}
                    </label>
                    <input
                      id={placeholder.replace(" ", "-").toLowerCase()}
                      type={
                        placeholder.includes("Capacity") ||
                        placeholder.includes("Reading")
                          ? "number"
                          : "text"
                      }
                      placeholder={placeholder}
                      className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
                <div className="col-span-2 space-y-4">
                  <h5 className="text-md font-semibold text-gray-700">
                    Registration Details
                  </h5>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      "Registration Number",
                      "Issued By",
                      "Issue Date",
                      "Expiry Date",
                    ].map((placeholder) => (
                      <div key={placeholder} className="space-y-2">
                        <label
                          htmlFor={placeholder.replace(" ", "-").toLowerCase()}
                          className="text-sm font-medium text-gray-600"
                        >
                          {placeholder}
                        </label>
                        <input
                          id={placeholder.replace(" ", "-").toLowerCase()}
                          type={placeholder.includes("Date") ? "date" : "text"}
                          placeholder={placeholder}
                          className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {formType === "branch" && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="branch-name"
                    className="text-sm font-medium text-gray-600"
                  >
                    Branch Name
                  </label>
                  <input
                    id="branch-name"
                    type="text"
                    placeholder="Branch Name"
                    className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-4">
                  <label
                    htmlFor="built-number"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Built Number
                  </label>
                  <div className="flex space-x-4">
                    <input
                      id="built-number-from"
                      type="number"
                      placeholder="From"
                      className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      id="built-number-to"
                      type="number"
                      placeholder="To"
                      className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="col-span-2 space-y-4">
                  <h5 className="text-md font-semibold text-gray-700">
                    Branch Address
                  </h5>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {["Street", "City", "State", "Postal Code", "Country"].map(
                      (placeholder) => (
                        <div key={placeholder} className="space-y-2">
                          <label
                            htmlFor={placeholder.toLowerCase()}
                            className="text-sm font-medium text-gray-600"
                          >
                            {placeholder}
                          </label>
                          <input
                            id={placeholder.toLowerCase()}
                            type="text"
                            placeholder={placeholder}
                            className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {formType === "employee" && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="date-of-birth"
                    className="text-sm font-medium text-gray-600"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="date-of-birth"
                    type="date"
                    className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-2 space-y-4">
                  <h5 className="text-md font-semibold text-gray-700">
                    Contact Information
                  </h5>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone-number"
                        className="text-sm font-medium text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone-number"
                        type="text"
                        placeholder="Phone Number"
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 space-y-4">
                  <h5 className="text-md font-semibold text-gray-700">
                    Emergency Contact
                  </h5>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="emergency-contact-name"
                        className="text-sm font-medium text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        id="emergency-contact-name"
                        type="text"
                        placeholder="Emergency Contact Name"
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="emergency-contact-phone"
                        className="text-sm font-medium text-gray-600"
                      >
                        Phone
                      </label>
                      <input
                        id="emergency-contact-phone"
                        type="text"
                        placeholder="Emergency Contact Phone"
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 space-y-4">
                  <h5 className="text-md font-semibold text-gray-700">
                    Position Details
                  </h5>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="role"
                        className="text-sm font-medium text-gray-600"
                      >
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        placeholder="Role"
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="hire-date"
                        className="text-sm font-medium text-gray-600"
                      >
                        Hire Date
                      </label>
                      <input
                        id="hire-date"
                        type="date"
                        className="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Admin;
