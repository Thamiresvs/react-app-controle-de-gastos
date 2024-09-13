import React from "react";

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <ul className="mb-6">
      {expenses.map((expense, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-50 border-b border-gray-200 py-2 px-4 rounded-lg mb-2"
        >
          <span>{expense.description}: R$ {expense.amount.toFixed(2)}</span>
          <button
            onClick={() => removeExpense(index)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
