import React from "react";

const ExpenseList = ({ expenses, removeExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.description}: R$ {expense.amount.toFixed(2)}
          <button onClick={() => removeExpense(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
