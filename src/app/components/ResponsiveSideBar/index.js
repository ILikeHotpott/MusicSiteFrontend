"use client";

import React, {useEffect, useState, useRef, useCallback} from "react";
import {Button, ScrollShadow, Spacer, Tooltip} from "@nextui-org/react";
import MomentItem from "@/app/components/MomentItem";
import SongOfTheDayCard from "@/app/components/SongOfTheDayCard";
import MomentModal from "@/app/components/MomentModal";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";
import {sectionItemsWithTeams} from "./sidebar-items";
import {cn} from "./cn";
import Sidebar from "./sidebar";
import axios from "axios";
import "./index.css";

export default function ResponsiveSideBar() {
    const isCompact = useMediaQuery("(max-width: 768px)");
    const [moments, setMoments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const [isMomentModalOpen, setIsMomentModalOpen] = useState(false);

    const [commentVisibleState, setCommentVisibleState] = useState({});


    const handleMomentModalOpen = () => {
        setIsMomentModalOpen(true);
    };

    const handleMomentModalClose = () => {
        setIsMomentModalOpen(false);
    };

    const loadMoments = async (page) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/playground/`, {
                params: {
                    page: page,
                    limit: 20,
                },
            });
            const data = response.data;
            console.log(data);
            setMoments((prevMoments) => [...prevMoments, ...data]);
            setHasMore(data.length === 20);
            setLoading(false);
        } catch (error) {
            console.error("There was an error fetching the moments!", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMoments(page);
    }, [page]);


    const toggleCommentArea = (id) => {
        setCommentVisibleState({...commentVisibleState, [id]: !commentVisibleState[id]});
    }


    const lastMomentElementRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <div className="flex h-screen w-full left-bar">
            <div
                className={cn(
                    "fixed top-18 left-0 h-full flex flex-col !border-r-small border-divider p-6 transition-width",
                    {
                        "w-16 items-center px-2 py-6": isCompact,
                        "w-72": !isCompact,
                    }
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-3 px-3",
                        {
                            "justify-center gap-0": isCompact,
                        }
                    )}
                >
          <span
              className={cn("text-small font-bold uppercase opacity-100", {
                  "w-0 opacity-0": isCompact,
              })}
          >
          </span>
                </div>
                <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                    <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams}/>
                </ScrollShadow>
                <Spacer y={2}/>
                <div
                    className={cn("mt-auto flex flex-col", {
                        "items-center": isCompact,
                    })}
                >
                    <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
                        <Button
                            fullWidth
                            className={cn(
                                "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                                {
                                    "justify-center": isCompact,
                                }
                            )}
                            isIconOnly={isCompact}
                            startContent={
                                isCompact ? null : (
                                    <Icon
                                        className="flex-none text-default-500"
                                        icon="solar:info-circle-line-duotone"
                                        width={24}
                                    />
                                )
                            }
                            variant="light"
                        >
                            {isCompact ? (
                                <Icon
                                    className="text-default-500"
                                    icon="solar:info-circle-line-duotone"
                                    width={24}
                                />
                            ) : (
                                "Help & Information"
                            )}
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="z-50 flex-1 flex-col ml-72 overflow-auto" style={{marginLeft: isCompact ? '4rem' : '18rem'}}>
                <main className="h-full w-full">
                    <div className="two-column-layout">
                        <div className="left-column items-center justify-center ml-5">
                            <div className="ml-5 mb-5">
                                <Button
                                    radius="full"
                                    size="lg"
                                    className=" mb-5 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 text-white shadow-lg animate-gradient-flow bg-[length:200%_200%]"
                                    onPress={handleMomentModalOpen}
                                    style={{marginLeft: '7rem'}}
                                >
                                    Click here to share your favourite music!
                                    <Icon
                                        className={cn("text-default-900/50")}
                                        icon="foundation:music"
                                        width={32}
                                    />
                                </Button>
                            </div>
                            <div className="content-container">
                                {moments.map((moment, index) => (
                                    <div
                                        ref={index === moments.length - 1 ? lastMomentElementRef : null}
                                        key={moment.id}
                                        className="mb-5"
                                    >
                                        <MomentItem moment={moment}
                                                    key={moment.id}
                                                    isCommentAreaVisible={commentVisibleState[moment.id]}
                                                    toggleCommentArea={() => toggleCommentArea(moment.id)}/>
                                    </div>
                                ))}
                                {loading && <p>Loading...</p>}
                            </div>
                        </div>
                        <div className="right-column song-of-the-day">
                            <div className="h-1/6"></div>
                            <div className="fixed-column-content">
                                <div>
                                    <SongOfTheDayCard className="w-full action-style"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <MomentModal isOpen={isMomentModalOpen} onClose={handleMomentModalClose}/>
        </div>
    );
}
