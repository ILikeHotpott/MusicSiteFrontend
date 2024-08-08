'use client';

import React, { useState } from "react";
import {Input} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import axios from "axios";

const SearchInput = ({ setResults }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = async () => {
        if (inputValue.trim() === "") return;

        try {
            const response = await axios.get(`http://localhost:8000/api/search_result`, {
                params: { query: inputValue }
            });
            setResults(response.data);
            console.log("Search results:", response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleIconClick = () => {
        handleSearch();
    };

    return (
        <div>
            <Input
                size="lg"
                radius="full"
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
                placeholder="What do you want to play?"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                endContent={
                    <SearchIcon
                        className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
                        onClick={handleIconClick}
                    />
                }
            />
        </div>
    );
};

export default SearchInput;
