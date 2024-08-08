"use client";

import React from "react";
import {cn} from "./cn";
import PlaceListItem from "./place-list-item";

export default function TrackResult({results, className}) {
    return (
        <div>
            <div
                className={cn(
                    "my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                    className,
                )}
            >
                {results.slice(0, 5).map((track) => (
                    <PlaceListItem key={track.id} {...track} />
                ))}
            </div>
        </div>
    );
}
