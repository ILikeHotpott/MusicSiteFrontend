import React, {useCallback, useEffect, useRef, useState} from "react";
import axios from "axios";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {cn} from "@/app/components/ResponsiveSideBar/cn";
import MomentItem from "@/app/components/MomentItem";
import MomentModal from "@/app/components/MomentModal";

const MomentSection = () => {
    const [moments, setMoments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();
    const [isMomentModalOpen, setIsMomentModalOpen] = useState(false);

    const [commentVisibleState, setCommentVisibleState] = useState({});

    const handleMomentModalClose = () => {
        setIsMomentModalOpen(false);
    };
    const handleMomentModalOpen = () => {
        setIsMomentModalOpen(true);
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
        <div>
            <main className="h-full w-full">
                <div className="two-column-layout">
                    <div className="items-center justify-center ml-5">
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
                </div>
            </main>
            <MomentModal isOpen={isMomentModalOpen} onClose={handleMomentModalClose}/>
        </div>
    )
}

export default MomentSection;