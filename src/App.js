import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import TotalAmount from "./TotalAmount";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold">Controle de Gastos</h1>
            <a
              href="https://www.linkedin.com/in/thamiresvasconcelos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700"
            >
              Meu LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg bg-white rounded-lg shadow p-6">
          <ExpenseForm addExpense={addExpense} />
          <ExpenseList expenses={expenses} removeExpense={removeExpense} />
          <TotalAmount expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
