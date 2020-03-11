import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

//class based components:
//state = {expenses: initialExpenses}
//this.setState({})

const initialExpenses = [
  { id: uuidv4(), charge: "Аренда", amount: 1500 },
  { id: uuidv4(), charge: "Кредит за авто", amount: 4700 },
  { id: uuidv4(), charge: "Отпуск", amount: 2500 }
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <h1>Калькулятор расходов</h1>
      <main className="app">
        <Form />
        <List expenses={expenses} />
      </main>
      <h2>
        Общие расходы:{" "}
        <span className="total-spending">
          {" "}
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}{" "}
        </span>
        ₽
      </h2>
      <Alert />
    </>
  );
}

export default App;
