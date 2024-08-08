// components/SongOfTheYear.js
import React from 'react';
import {Image} from "@nextui-org/react";
import StarLayer from "@/app/components/MusicNav/StarLayer";
import "./index.css"

const PlaylistHead = ({src}) => {
    return (
        <div className="flex flex-col md:flex-row items-center p-10 rounded-lg bg-gradient-to-r w-full from-green-400 to-pink-400 text-white shadow-lg animate-gradient-flow bg-[length:180%_180%]">
            <div className="flex justify-center items-center">
                <div className="flex-1 flex md:justify-end p-4">
                    <Image
                        src="https://i.scdn.co/image/ab67616d0000b273bf94e27360806b5aa5025f93"
                        alt="Song of the Year"
                        className="rounded-lg"
                        width={250}
                        height={250}
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center p-4">
                    <h2 className="text-5xl font-bold mb-4 text-center md:text-left">Grammy Awards Song of the Year</h2>
                    <p className="mb-4 text-center md:text-left">Playlist - 67 songs | 4 hours 22 mins</p>
                </div>
            </div>
        </div>
    );
};

export default PlaylistHead;
