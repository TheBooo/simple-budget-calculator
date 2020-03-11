import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const Item = ({ expense }) => {
  const { id, charge, amount } = expense;
  return (
    <>
      <li>
        <div>{charge}</div>
        <div>
          {amount}{" "}
          <span className="edit-icon" aria-label="Edit">
            <MdEdit />
          </span>
          <span className="delete-icon" aria-label="Close">
            <MdDelete />
          </span>
        </div>
      </li>
    </>
  );
};

export default Item;
