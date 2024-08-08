'use client';

import {Avatar} from "@nextui-org/react";
import React from "react";
import "@/pages/search/index.css";

const ArtistResult = ({results}) => {
    return (
        <div>
            <div className="artist-container mt-4">
                {results && results.map((artist, index) => (
                    <div key={index} className="artist-item">
                        <Avatar src={artist.image} className="w-24 h-24 text-large"/>
                        <span className="mt-2 artist-font normal-color">{artist.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistResult;
