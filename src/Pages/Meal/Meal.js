import React from 'react';
import Item from '../Item/Item';

const Meal = (props) => {
    const { meal } = props;
    const breakfast = meal.breakfast;

    return (
        <>
            {
                breakfast.map(bf => <Item
                    key={bf.itemId}
                    bf={bf}
                ></Item>)
            }
        </>
    );
};

export default Meal;