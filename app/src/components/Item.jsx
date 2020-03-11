import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const Item = ({ expense, onDelete, onEdit }) => {
  const { id, charge, amount } = expense;
  return (
    <>
      <li>
        <div>{charge}</div>
        <div>
          {amount}
          <span
            className="edit-icon"
            aria-label="Edit"
            onClick={() => onEdit(id)}
          >
            <MdEdit />
          </span>
          <span
            className="delete-icon"
            aria-label="Close"
            onClick={() => onDelete(id)}
          >
            <MdDelete />
          </span>
        </div>
      </li>
    </>
  );
};

export default Item;
