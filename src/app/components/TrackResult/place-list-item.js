"use client";

import React from "react";
import {Button, Image} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {cn} from "./cn";
import "@/pages/Search/index.css"

const PlaceListItem = React.forwardRef(
    (
        {id, album, artist, imageSrc, rating, track},
        ref,
    ) => {
        const [isLiked, setIsLiked] = React.useState(false);

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex w-full flex-none flex-col gap-3",
                )}
            >
                <Button
                    isIconOnly
                    className="absolute right-3 top-3 z-20 bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                    radius="full"
                    size="sm"
                    variant="flat"
                    onPress={() => setIsLiked(!isLiked)}
                >
                    <Icon
                        className={cn("text-default-900/50", {
                            "text-danger-400": isLiked,
                        })}
                        icon="solar:heart-bold"
                        width={16}
                    />
                </Button>
                <Image
                    isBlurred
                    isZoomed
                    className="aspect-square w-full hover:scale-110"
                    src={imageSrc}
                />

                <div className="mt-1 flex flex-col gap-2 px-1">
                    <>
                        <div className="flex items-start justify-between gap-1">
                            <h3 className="text-small font-medium text-default-700 normal-color">{track}</h3>
                            {rating !== undefined ? (
                                <div className="flex items-center gap-1">
                                    <Icon className="text-default-500" icon="solar:star-bold" width={16}/>
                                    <span className="text-small text-default-500 normal-color">{rating}</span>
                                </div>
                            ) : null}
                        </div>
                        {artist ? <p className="text-small text-default-500 not-normal-color">{artist}</p> : null}
                    </>

                </div>
            </div>
        );
    },
);

PlaceListItem.displayName = "PlaceListItem";

export default PlaceListItem;