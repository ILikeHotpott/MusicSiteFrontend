import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import MusicNav from "@/app/components/MusicNav";
import PlaylistSongCard from "@/app/components/PlaylistSongCard";
import PlaylistHead from "@/app/components/PlaylistHead";

const Playlist = () => {
    const router = useRouter();
    const { id } = router.query;
    const [songs, setSongs] = useState([]);
    const [playlistCover, setPlaylistCover] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchPlaylist = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/playlist/${id}/`);
                    setSongs(response.data);
                    if (response.data.length > 0) {
                        setPlaylistCover(response.data[0].playlist_cover);
                    }
                    console.log("Playlist data:", response.data);
                } catch (error) {
                    console.error('Error fetching playlist:', error);
                }
            };

            fetchPlaylist();
        }
    }, [id]);

    if (!songs.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-800 w-full">
            <MusicNav />
            <PlaylistHead src={playlistCover} />
            <div className="h-full">
                <div className="w-full flex flex-col items-center justify-center">
                    {songs.map((song, index) => (
                        <PlaylistSongCard key={index} index={index} song={song} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Playlist;
