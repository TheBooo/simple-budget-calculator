import React from "react";
import { MdDone } from "react-icons/md";

const Form = props => {
  return (
    <form onSubmit={props.onHandleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Расходы</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="Ипотека"
            value={props.charge}
            onChange={props.onHandleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Стоимость</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="20000"
            value={props.amount}
            onChange={props.onHandleAmount}
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            {props.edit ? `Изменить ` : `Добавить`} <MdDone />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
