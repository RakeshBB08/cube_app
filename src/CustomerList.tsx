// CustomerList.tsx
import React from "react";
import CustomerCard from "./CustomerCard";
import { dummyCustomerData } from "./dummyData";

interface CustomerListProps {
  onSelect: (customerId: number) => void;
  selectedCustomerId: number | null;
}

const CustomerList: React.FC<CustomerListProps> = ({
  onSelect,
  selectedCustomerId,
}) => {
  return (
    <div className="w-1/3 border-r border-gray-200">
      {dummyCustomerData.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onSelect={() => onSelect(customer.id)}
          isSelected={selectedCustomerId === customer.id}
        />
      ))}
    </div>
  );
};

export default CustomerList;
