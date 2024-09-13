import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import TotalAmount from "./TotalAmount";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Função para adicionar uma nova despesa
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Função para remover uma despesa
  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div className="App">
      <h1>Controle de Gastos</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} removeExpense={removeExpense} />
      <TotalAmount expenses={expenses} />
    </div>
  );
}

export default App;
