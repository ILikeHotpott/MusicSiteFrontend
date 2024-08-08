import "./index.css"
import ScrollGallery from "@/app/components/ScrollGallery";
import MusicNav from "@/app/components/MusicNav";
import Chart from "@/app/components/Chart";
import {useSelector} from "react-redux";

const rank_list = () => {

    const gallery_images = {
        "list1": [
            "https://i.scdn.co/image/ab67616d0000b2738ecc33f195df6aa257c39eaa",
            "https://i.scdn.co/image/ab67616d0000b273e5a25ed08d1e7e0fbb440cef",
            "https://i.scdn.co/image/ab67616d0000b2739b9b36b0e22870b9f542d937",
            "https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7",
            "https://i.scdn.co/image/ab67616d0000b273d441b2e9b63f0b9f9d90be19",
            "https://i.scdn.co/image/ab67616d0000b2737c68face1dc58127f3a7b1cc",
            "https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2",
            "https://i.scdn.co/image/ab67616d0000b2734973a7d9304de53e18583220",
            "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
            "https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9"
        ],
        "list2": [
            "https://i.scdn.co/image/ab67616d0000b273f7ecaf9daf2c1d5ca89f7312",
            "https://i.scdn.co/image/ab67616d0000b27359998815d706661e2c404d9f",
            "https://i.scdn.co/image/ab67616d0000b273f72f1e38e9bd48f18a17ed9b",
            "https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634",
            "https://i.scdn.co/image/ab67616d0000b2731d5cf960a92bb8b03fc2be7f",
            "https://i.scdn.co/image/ab67616d0000b2739e16930796a07f1195002389",
            "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
            "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
            "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023",
            "https://i.scdn.co/image/ab67616d0000b273ab5e496971b38a864fefdb8d"
        ],
        "list3": [
            "https://i.scdn.co/image/ab67616d0000b27356ac7b86e090f307e218e9c8",
            "https://i.scdn.co/image/ab67616d0000b273775e8184725e0fb89337dd9a",
            "https://i.scdn.co/image/ab67616d0000b273125b1a330b6f6100ab19dbed",
            "https://i.scdn.co/image/ab67616d0000b273b4bf5aa282f90b0f92e5d85a",
            "https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778",
            "https://i.scdn.co/image/ab67616d0000b2735f96f9df056aa682c854e720",
            "https://i.scdn.co/image/ab67616d0000b273199b850d4877866cf7e318d1",
            "https://i.scdn.co/image/ab67616d0000b273df55e326ed144ab4f5cecf95",
            "https://i.scdn.co/image/ab67616d0000b273295e5a613cb3fb9f7ccf532e",
            "https://i.scdn.co/image/ab67616d0000b273e5a95573f1b91234630fd2cf"
        ]
    }

    const list1 = useSelector((state) => state.chart.list1);
    const list2 = useSelector((state) => state.chart.list2);
    const list3 = useSelector((state) => state.chart.list3);


    return (
        <div>
            <MusicNav/>
            <div className="video-logo-container">
                <video src="https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/blackhole_5x.mp4" autoPlay loop
                       muted playsInline></video>
                <div className="mask-container"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mt-10">
                    <ScrollGallery images={gallery_images["list1"]} speed={0.6} direction="right" size={230}/>
                </div>
                <Chart items={list1}/>
                <div className="mt-10">
                    <ScrollGallery images={gallery_images["list2"]} speed={0.6} direction="left" size={230}/>
                </div>
                <Chart items={list2}/>
                <div className="mt-10">
                    <ScrollGallery images={gallery_images["list3"]} speed={0.6} direction="right" size={230}/>
                </div>
                <Chart items={list3}/>
                <div className="mt-10">
                    <ScrollGallery images={gallery_images["list1"]} speed={0.6} direction="left" size={230}/>
                </div>
            </div>
        </div>
    )
}

export default rank_list
