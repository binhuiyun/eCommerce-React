import React, { useState } from 'react';
import { Button } from 'antd';

const GroupButtons = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => { 
        if (count > 0){
            setCount(count - 1);
        }
    };

    const displayCount = count > 0;

    return (
        <Button.Group>
            {displayCount && (
               < Button onClick={handleDecrement} disabled={count === 0}> -</Button>)}
            {displayCount && <Button disabled>{count}</Button>}
            <Button onClick={handleIncrement}>Add</Button>
        </Button.Group> 
    );
}

export default GroupButtons;