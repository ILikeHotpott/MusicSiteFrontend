"use client";

// MomentItem.js
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@/app/components/TrackResult/cn";
import PicModal from "@/app/components/PicModal";
import CommentArea from "@/app/components/MomentItem/commentArea";
import CommentList from "@/app/components/CommentList";
import axios from 'axios';
import "./index.css";

export default function MomentItem({ moment, isCommentAreaVisible, toggleCommentArea }) {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments, setComments] = useState(moment.comments);

    const handleCommentSubmitted = async () => {
        try {
            const response = await axios.get(`/get-moment-comments/${moment.id}`);
            setComments(response.data.comments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleImageClick = (url) => {
        setSelectedImage(url);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="pl-2 pr-2">
            <Card className="width={90%} action-style mb-5">
                <CardHeader className="justify-between flex-wrap">
                    <div className="flex gap-5 items-center">
                        <Avatar radius="full" size="lg" src={moment.user.avatar} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-lg font-semibold leading-none text-default-600">{moment.user.username}</h4>
                        </div>
                    </div>
                    <Button
                        className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                        color="primary"
                        radius="full"
                        size="sm"
                        variant={isFollowed ? "bordered" : "solid"}
                        onPress={() => setIsFollowed(!isFollowed)}
                    >
                        {isFollowed ? "Unfollow" : "Follow"}
                    </Button>
                </CardHeader>
                <CardBody className="px-3 text-lg text-black -mt-5">
                    <p className="moment-font">{moment.content}</p>
                    {moment.image_urls.length > 0 && (
                        <div className="grid grid-cols-3 gap-6" style={{ width: '100%', height: '100%' }}>
                            {moment.image_urls.map((url, index) => (
                                <div
                                    key={index}
                                    className="image-grid-item rounded-md"
                                    style={{ width: '180px', height: '180px', cursor: 'pointer' }}
                                    onClick={() => handleImageClick(url)}
                                >
                                    <img src={url} alt="" className="object-cover w-full h-full" />
                                </div>
                            ))}
                        </div>
                    )}
                </CardBody>
                <Divider />
                <CardFooter className="flex items-center justify-center p-0 flex-col w-full">
                    <div className="w-5/6 flex justify-between">
                        <Button
                            isIconOnly
                            className="action-style bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                            radius="full"
                            onPress={() => setIsLiked(!isLiked)}
                        >
                            <Icon
                                className={cn("text-default-900/50", {
                                    "text-danger-500": isLiked,
                                })}
                                icon="solar:heart-bold"
                                width={23}
                            />
                        </Button>

                        <Button
                            isIconOnly
                            className="action-style bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                            variant="flat"
                            onPress={toggleCommentArea}
                        >
                            <Icon
                                className={cn("text-default-900/50")}
                                icon="iconamoon:comment-dots"
                                width={22}
                            />
                        </Button>

                        <Button
                            isIconOnly
                            className="action-style bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                            variant="flat"
                        >
                            <Icon
                                className={cn("text-default-900/50")}
                                icon="ic:round-share"
                                width={22}
                            />
                        </Button>
                    </div>
                    {isCommentAreaVisible && (
                        <div className="w-full mt-4">
                            <CommentArea momentId={moment.id} onCommentSubmitted={handleCommentSubmitted} />
                            <CommentList comments={comments} />
                        </div>
                    )}
                </CardFooter>
            </Card>
            {selectedImage && (
                <PicModal
                    className="z-50"
                    url={selectedImage}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
