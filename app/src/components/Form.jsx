import React from "react";
import { MdDone } from "react-icons/md";

const Form = () => {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Расходы</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="Ипотека"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Стоимость</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="20000"
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Добавить <MdDone />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
