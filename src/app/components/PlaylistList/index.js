import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ProfilePlaylistItem from "@/app/components/ProfilePlaylistItem"

const PlaylistList = () => {
    return (
        <div className="w-1/3">
            <Card className="w-full">
                <CardHeader className="text-2xl -mb-2">Playlists</CardHeader>
                <CardBody>
                    <div className="h-full w-full">
                        <div className="flex flex-col items-center justify-center">
                            <ProfilePlaylistItem />
                            <ProfilePlaylistItem />
                            <ProfilePlaylistItem />
                            <ProfilePlaylistItem />
                            <ProfilePlaylistItem />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default PlaylistList;
