import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses , budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const gradientBackgroundStyle = {
        background: 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)',
        padding: '20px',
        color: 'white',
        borderRadius: '10px', // Rounded corners
    };
    
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return(
        // <div className = {`alert ${alertType}`}>
        // <span>Remaining: £{budget - totalExpenses}</span>    
        // </div>
        <div style = {gradientBackgroundStyle}>
        <span>Remaining: £{budget - totalExpenses}</span>    
        </div>
    );

};


export default Remaining;