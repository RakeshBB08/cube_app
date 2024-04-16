// CustomerCard.tsx
import React from "react";
import { Customer } from "./types";

interface CustomerCardProps {
  customer: Customer;
  onSelect: () => void;
  isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`p-4 cursor-pointer ${
        isSelected ? "bg-gray-200" : ""
      } hover:bg-gray-100 border-b-black-200`}
      onClick={onSelect}
    >
      <h3 className="text-lg font-semibold text-center">{customer.name}</h3>
      <p className="text-gray-600 text-center">{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
