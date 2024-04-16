// CustomerDetails.tsx
import React from "react";
import { Customer } from "./types";
import PhotoGrid from "./PhotoGrid";
import { dummyCustomerData } from "./dummyData";

interface CustomerDetailsProps {
  customerId: number | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customerId }) => {
  const customer = customerId
    ? dummyCustomerData.find((c) => c.id === customerId)
    : null;

  return (
    <div className="w-2/3 p-4">
      {customer ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {customer.name}
          </h2>
          <p className="text-gray-600 mb-2 text-center">{customer.title}</p>
          <p className="text-gray-600 mb-2 text-center">{customer.address}</p>
          <p className="text-gray-600 mb-2">{customer.description}</p>
          <PhotoGrid />
        </div>
      ) : (
        <p className="justify-text mb-5 ">
          Please select a customer from the list
        </p>
      )}
    </div>
  );
};

export default CustomerDetails;
