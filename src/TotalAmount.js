import React from "react";

const TotalAmount = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="text-xl font-bold text-center bg-indigo-100 text-indigo-700 py-2 rounded-lg">
      Total de Gastos: R$ {total.toFixed(2)}
    </div>
  );
};

export default TotalAmount;
