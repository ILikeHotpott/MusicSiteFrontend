import MusicNav from "@/app/components/MusicNav";
import ScrollGallery from "@/app/components/ScrollGallery";
import PlaylistList from "@/app/components/PlaylistList";
import MomentSection from "@/app/components/MomentSection";
import DraggableBackground from "@/app/components/DraggableBackground";

const profile = () => {

    return (
        <div className="bg-black">
            <MusicNav/>
            <div>
                <DraggableBackground avatarSrc={"https://musictop-bucket.s3.amazonaws.com/media/avatar/WechatIMG140.jpg"} />
            </div>

            <div>
                {/*<ScrollGallery direction="right" size={230} speed={0.8}/>*/}
                <div className="flex p-3 w-full justify-center mt-10">
                    <PlaylistList className="mr-20"/>

                    <div className="w-1/2">
                        <div className="ml-10">
                            <MomentSection/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile;
