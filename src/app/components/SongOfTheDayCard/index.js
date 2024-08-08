"use client";

import React from "react";
import {Card, Image, CardBody, CardFooter, Button, Spacer, CardHeader} from "@nextui-org/react";
import "./index.css"

export default function SongOfTheDayCard(props) {
    return (
        <Card {...props}
        className="bg-image">
            <CardHeader>
                <div className="flex flex-auto items-center justify-center text-3xl">
                    <h1>Song of the day</h1>
                </div>
            </CardHeader>
            <CardBody className="px-3 pb-1">
                <Image
                    alt="Card image"
                    src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/LetTheLightIn_YUIubch.webp"
                />

                <Spacer y={2}/>
                <div className="flex flex-col gap-2 px-2">
                    <p className="text-large font-medium">Let The Light In</p>
                    <p className="text-small text-default-400">
                        Lana Del Rey
                    </p>
                </div>
            </CardBody>
            <CardFooter className="justify-end gap-2">
                <Button fullWidth>
                    Cancel
                </Button>
                <Button fullWidth>Like</Button>
            </CardFooter>
        </Card>
    );
}
