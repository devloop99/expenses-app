import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

//5000
//500.55
//formatting function
export const formatNum = (num) => {
  let arr = num.toFixed(2).split(".");
  if (arr[0].length > 3) {
    let den = arr[0];
    arr[0] =
      den.slice(0, den.length - 3) +
      "," +
      den.slice(den.length - 3, den.length);
  }

  return "$" + arr[0] + "." + arr[1];
};

export const ExpenseListItem = ({ description, amount, createdAt, id }) => {
  return (
    <dive>
      <Link to={"/edit/" + id}>
        <h3>{description}</h3>
      </Link>

      <p>
        Amount : {formatNum(amount)}
        <br />
        Date : {moment(createdAt).format("MMM, Do YYYY")}
      </p>
    </dive>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const ExpenseListItemConnected = connect(mapStateToProps)(ExpenseListItem);

export default ExpenseListItemConnected;
