import React from 'react';

const PlaylistSongCard = ({ index, song }) => {
    return (
        <div className="flex items-center p-5 border-b border-[#444] w-3/4">
            <div className="flex items-center justify-center text-center mr-5">
                <span className="w-[60px] font-bold text-[50px] text-white">{index + 1}</span>
            </div>
            <img
                src={song.pic_url}
                alt={song.title}
                className="w-[130px] h-[130px] rounded mr-4"
            />
            <div className="flex flex-col">
                <div className="text-[40px] text-[#fdf0ff]">{song.title}</div>
                <div className="text-[20px] text-[#bbb]">{song.artist}</div>
            </div>
        </div>
    );
};

export default PlaylistSongCard;
