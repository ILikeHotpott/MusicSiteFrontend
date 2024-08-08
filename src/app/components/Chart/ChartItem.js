import React from 'react';
import "./index.css"

const ChartItem = ({ imgSrc, track, artist, rank }) => {
  return (
    <div className="min-w-[300px] p-2 mt-4">
      <div className="bg-white first-chart-shadow overflow-hidden h-full flex flex-col justify-between" style={{ minHeight: '230px' }}>
        <div className="flex p-4">
          <div className="w-1/3">
            <img src={imgSrc} className="object-cover h-[85px] w-[85px]" alt={track} />
          </div>
          <div className="w-2/3 pl-4 flex flex-col">
            <div className="flex items-center mb-2">
              <div className="text-3xl font-bold text-black">{rank}</div>
              <div className="ml-2">
                <img src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/new.jpg" className="h-6 mt-2" alt="new" />
              </div>
            </div>
            <div className="text-medium font-semibold text-black leading-tight truncate">{track}</div>
            <div className="text-sm text-gray-600">{artist}</div>
          </div>
        </div>

        <div className="items-center justify-center flex min-h-[100px] bg-gray-200 text-2xl text-center text-blue-700 font-bold p-2">
          NEW THIS WEEK!
        </div>
      </div>
    </div>
  );
};

export default ChartItem;
