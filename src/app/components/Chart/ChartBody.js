import React from 'react';
import ChartItem from './ChartItem';

const ChartBody = ( {items} ) => {


    return (
        <div className="flex items-center overflow-x-auto p-4 space-x-4">
            {items.map((item, index) => (
                <ChartItem key={index} {...item} />
            ))}
        </div>
    );
};

export default ChartBody;
