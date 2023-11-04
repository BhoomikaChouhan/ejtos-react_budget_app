import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {

    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const gBS = {
        background: 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)',
        padding: '20px',
        color: 'white',
        borderRadius: '10px', // Rounded corners
    };
    return(
        <div className='' style={gBS}>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
