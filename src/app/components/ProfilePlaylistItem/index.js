import React from "react";

const ProfilePlaylistItem = () => {
    return (
        <div className="flex items-center p-4 bg-[#1d2633] w-full">
            <img
                src="https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526"
                alt="song-cover"
                className="w-[100px] h-[100px] rounded mr-4"
            />
            <div className="flex flex-col">
                <div className="text-[24px] text-white">Pink + White</div>
                <div className="text-[18px] text-[#bbb]">Frank Ocean</div>
            </div>
        </div>
    );
}

export default ProfilePlaylistItem;
