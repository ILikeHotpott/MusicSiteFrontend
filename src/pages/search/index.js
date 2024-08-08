"use client";

import React, {useState} from "react";
import SearchInput from "@/app/components/SearchInput";
import MusicNav from "@/app/components/MusicNav";
import TrackResult from "@/app/components/TrackResult";
import AlbumResults from "@/app/components/AlbumResults";
import ArtistResult from "@/app/components/ArtistResult";
import "./index.css";

const Search = () => {
    const [results, setResults] = useState({artists: [], albums: [], tracks: []});

    return (
        <div className="bgc min-h-screen">
            <MusicNav/>
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="w-1/2">
                    <SearchInput setResults={setResults}/>
                </div>
            </div>

            {results.artists.length > 0 && (
                <div>
                    <h1 className="text-2xl font-bold mt-10 ml-16 normal-color">Artists:</h1>
                    <div className="ml-16">
                        <ArtistResult results={results.artists}/>
                    </div>

                    <h1 className="text-2xl font-bold mt-20 ml-16 -mb-10 normal-color">Tracks:</h1>
                    <div className="flex justify-center items-center mt-10">
                        <TrackResult results={results.tracks}/>
                    </div>

                    <h1 className="text-2xl font-bold mt-8 ml-16 -mb-10 normal-color">Albums:</h1>
                    <div className="flex justify-center items-center mt-10">
                        <AlbumResults results={results.albums}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
