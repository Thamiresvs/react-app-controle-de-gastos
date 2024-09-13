import React from "react";

const TotalAmount = ({ expenses }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return <h2>Total de Gastos: R$ {total.toFixed(2)}</h2>;
};

export default TotalAmount;
