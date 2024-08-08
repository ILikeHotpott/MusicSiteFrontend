import React from 'react';
import ChartHeader from './ChartHeader';
import ChartBody from './ChartBody';
import ChartFooter from './ChartFooter';

const Chart = ( {items} ) => {
    return (
        <div className="sm:w-[70%] w-full">
            <div className="w-full bg-white mt-10 relative" id="first-chart">
                <div className="h-[10px]"></div>
                <ChartHeader/>
                <ChartBody items={items}/>
                <ChartFooter/>
            </div>
        </div>
    );
};

export default Chart;
