import React, { useEffect } from 'react';
import './index.css';
import { fetchUserInfo } from "@/store/modules/user";
import { useDispatch, useSelector } from "react-redux";
import StarLayer from "@/app/components/MusicNav/StarLayer";
import CustomDropdown from "@/app/components/CustomDropdown";

const MusicNav = ({ isAuthenticated, username }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    const user = useSelector(state => state.user.userInfo.id);
    console.log(user);

    return (
        <div className="navbar-container">
            <div className="navbar z-20 flex" id="nav1">
                <div className="brand-container">
                    <a href="/home/" className="brand navbar-title">
                        MUSICTOP
                    </a>
                </div>
                <div className="ml-auto flex">
                    {!isAuthenticated ? (
                        <CustomDropdown username={username} className="float-right" />
                    ) : (
                        <a href="/login/" className="login-button" id="loginButton">{user}</a>
                    )}
                </div>
            </div>

            <div className="navbar flex z-20" id="nav2">
                <div className="link-container">
                    <a href="/home/">Home</a>
                    <a href="/rank_list/">Music Rank</a>
                    <a href="/playground/">Playground</a>
                    <a href="/search/">Search</a>
                </div>
            </div>
            <StarLayer className="z-0" />
        </div>
    );
};

export default MusicNav;
