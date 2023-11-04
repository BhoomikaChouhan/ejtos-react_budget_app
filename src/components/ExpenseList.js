import React from "react";
import ExpenseItem from './ExpenseItem';
import { AppContext } from "../context/AppContext";
import { useContext, useState } from 'react';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return(
       <div className="table-responsive"> <table className="table table-bordered table-striped table-hover">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {expenses.map((expense) =>(
                <ExpenseItem 
                id={expense.id} 
                key={expense.id}
                name = {expense.name}
                cost={expense.cost}/>
            ))}
            </tbody>
        </table></div>
    );
};

export default ExpenseList;
