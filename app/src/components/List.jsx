import React from "react";
import Item from "./Item";

const List = ({ expenses }) => {
  return (
    <>
      <ul>
        {expenses.map(expense => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn">Удалить все расходы</button>
      )}
    </>
  );
};

export default List;
