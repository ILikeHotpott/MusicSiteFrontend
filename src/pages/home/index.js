import {useInView} from 'react-intersection-observer';
import MusicNav from "@/app/components/MusicNav";
import "./index.css";
import React from "react";

export default function Home() {
    const {ref: firstTitleRef, inView: firstTitleInView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const {ref: circleSectionRef, inView: circleSectionInView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const {ref: exploreButtonRef, inView: exploreButtonInView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div>
            <MusicNav/>

            <div className="m-0 bg-black min-h-screen overflow-x-hidden">
                <div className="relative h-[70vh] w-full overflow-hidden">
                    <video
                        src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/519black.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </div>

                <div>
                    <div
                        ref={firstTitleRef}
                        className={`flex justify-center items-center min-h-[30vh] text-7xl font-medium text-white transition-opacity duration-700 ease-in-out ${firstTitleInView ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                        Guide you to music bliss,
                        <br/>
                        effortlessly.
                    </div>
                    <div className="absolute">
                        <div className="layer1 star-layer"></div>
                        <div className="layer2 star-layer"></div>
                        <div className="layer3 star-layer"></div>
                        <div className="layer4 star-layer"></div>
                        <div className="layer5 star-layer"></div>
                    </div>

                    <div
                        ref={exploreButtonRef}
                        className={`mb-[10%] text-center items-center relative min-h-[10vh] text-3xl transition-opacity duration-700 ease-in-out justify-center ${exploreButtonInView ? 'flex opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                        <a href="/rank_list/" className="no-underline">Explore now!</a>
                    </div>

                    <div className="flex items-center justify-center min-h-[80vh] pb-[20%] z-50">
                        <div
                            ref={circleSectionRef}
                            className={`circle-section ${circleSectionInView ? 'flex' : ''}`}>
                            <div className="relative w-[300px] h-[300px] perspective-[1500px] carousel">
                                <div
                                    className="absolute w-full h-full transform-style-3d animate-rotate duration-[20000ms] linear infinite carousel__track">
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273e5a25ed08d1e7e0fbb440cef')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273d441b2e9b63f0b9f9d90be19')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b2737c68face1dc58127f3a7b1cc')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b2734973a7d9304de53e18583220')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526')"}}
                                    ></div>
                                    <div
                                        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-cover bg-center carousel__slide"
                                        style={{backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9')"}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
