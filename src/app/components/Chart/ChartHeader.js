import React from 'react';

const ChartHeader = () => {
    return (
        <div className="mt-4">
            <div className="text-center flex justify-center items-center -mb-5">
                <hr className="w-1/4 h-3 bg-blue-500 inline-block"/>
                <span className="mx-4 text-4xl font-medium text-blue-500">MusicTop Hot 100</span>
                <hr className="w-1/4 h-3 bg-blue-500 inline-block"/>
            </div>
        </div>
    );
};

export default ChartHeader;
