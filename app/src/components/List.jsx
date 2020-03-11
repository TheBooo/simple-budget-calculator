import React from "react";
import Item from "./Item";

const List = ({
  expenses,
  onHandleDeleteAll,
  onHandleDelete,
  onHandleEdit
}) => {
  return (
    <>
      <ul>
        {expenses.map(expense => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              onDelete={onHandleDelete}
              onEdit={onHandleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={onHandleDeleteAll}>
          Удалить все расходы
        </button>
      )}
    </>
  );
};

export default List;
