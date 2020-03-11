import React, { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

/*
const initialExpenses = [
  { id: uuidv4(), charge: "Аренда", amount: 1500 },
  { id: uuidv4(), charge: "Кредит за авто", amount: 4700 },
  { id: uuidv4(), charge: "Отпуск", amount: 2500 }
];*/
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  // --------------------------- STATE VALUES-------------------------
  //all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState("");
  //single amount
  const [amount, setAmount] = useState("");
  //alert
  const [alert, setAlert] = useState({ show: false });
  //edit
  const [edit, setEdit] = useState(false);
  //edit item id
  const [id, setId] = useState(0);

  //-----------------------------useEFFECT--------------------------

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // --------------------------- FUNCTIONALITY-------------------------
  //FORM
  //charge
  const handleCharge = event => {
    setCharge(event.target.value);
  };
  //amount
  const handleAmount = event => {
    setAmount(event.target.value);
  };
  //submit
  const handleSubmit = event => {
    event.preventDefault();
    if (charge !== "" && amount > 0) {
      //check if we are editing
      if (edit) {
        let tempExpenses = expenses.map(expense => {
          return expense.id === id ? { ...expense, charge, amount } : expense;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "Расходы изменены" });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Расходы добавлены" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Назовите расходы и введите стоимость > 0"
      });
    }
  };
  //DELETE ALL
  const handleDeleteAll = event => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "Все расходы удалены" });
  };
  //DELETE SINGLE EXPENSE
  const handleDelete = id => {
    let newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
    handleAlert({ type: "danger", text: "Расходы удалены" });
  };
  //EDIT SINGLE EXPENSE
  const handleEdit = id => {
    let currentExpense = expenses.filter(expense => expense.id === id);
    setCharge(currentExpense[0].charge);
    setAmount(currentExpense[0].amount);
    setEdit(true);
    setId(id);
  };
  //ALERT
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 2000);
  };
  return (
    <>
      <h1>Калькулятор расходов</h1>
      <main className="app">
        <Form
          charge={charge}
          amount={amount}
          onHandleAmount={handleAmount}
          onHandleCharge={handleCharge}
          onHandleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          onHandleDeleteAll={handleDeleteAll}
          onHandleDelete={handleDelete}
          onHandleEdit={handleEdit}
        />
      </main>
      {/*ОБЩИЕ РАСХОДЫ*/}
      <h2>
        Общие расходы:{" "}
        <span className="total-spending">
          {" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}{" "}
        </span>
        ₽
      </h2>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
    </>
  );
}

export default App;
