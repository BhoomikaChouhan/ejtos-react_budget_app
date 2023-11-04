import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    // Define the CSS style for the gradient background
    const gradientBackgroundStyle = {
        background: 'linear-gradient(to right, #fd746c, #ff9068)',
        padding: '20px',
        color: 'white',
        borderRadius: '10px', // Rounded corners
    };

    return (
        <div className="" style={gradientBackgroundStyle}>
            <span>Budget: £{newBudget} </span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
}

export default Budget;
