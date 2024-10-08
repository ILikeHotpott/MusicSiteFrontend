import MusicNav from "@/app/components/MusicNav";
import ScrollGallery from "@/app/components/ScrollGallery";
import PlaylistList from "@/app/components/PlaylistList";
import MomentSection from "@/app/components/MomentSection";
import DraggableBackground from "@/app/components/DraggableBackground";

const profile = () => {

    const bgColor = "bg-gray-300"

    return (
        <div className="bg-gray-400">
            <MusicNav/>
            <div className={``} style={{backgroundColor: 'transparent'}}>
                <DraggableBackground
                    avatarSrc={"https://musictop-bucket.s3.amazonaws.com/media/avatar/WechatIMG140.jpg"}
                    bgColor={bgColor}/>
            </div>

            <div>
                <div className="h-1/4 mt-10">
                    <div className="flex justify-center items-center w-full h-full text-3xl font-bold text-gray-800 mb-8">Favorite Albums</div>
                    <ScrollGallery  direction="right" size={200} speed={0.8}/>
                </div>
                <div className="flex p-3 w-full justify-center mt-10 h-screen">
                    <PlaylistList className="mr-20"/>

                    <div className="w-1/2">
                        <div className="ml-10 max-h-[100%] overflow-y-auto">
                            <MomentSection/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile;
