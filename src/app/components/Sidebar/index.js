"use client";

import React from "react";
import {ScrollShadow, Spacer} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import Sidebar from "./sidebar";
import {Outlet, useLocation} from "react-router-dom";
import {useRouter} from 'next/router';

const sidebarItems = [
    {
        key: "home",
        icon: "solar:home-2-linear",
        title: "Home",
        ariaLabel: "Home",
        href: "",
        path: "/dashboard"
    },
    {
        key: "reviews",
        icon: "solar:widget-2-outline",
        title: "Reviews",
        ariaLabel: "Reviews",
        endContent: (
            <Icon
                className="text-default-400"
                icon="solar:add-circle-line-duotone"
                width={24}
                aria-label="Add Review"
            />
        ),
        href: "",
        path: "/home/review"
    },
    {
        key: "articles",
        icon: "solar:checklist-minimalistic-outline",
        title: "Articles",
        ariaLabel: "Articles",
        endContent: (
            <Icon
                className="text-default-400"
                icon="solar:add-circle-line-duotone"
                width={24}
                aria-label="Add Article"
            />
        ),
        href: "",
        path: "/dashboard/article"
    },
    {
        key: "team",
        icon: "solar:users-group-two-rounded-outline",
        title: "Team",
        ariaLabel: "Team",
        href: "",
        path: "/dashboard/team"
    },
];

export default function Toolbar() {
    const router = useRouter();

    const onMenuClick = (item) => {
        if (item && item.path) {
            console.log("Menu clicked", item);
            router.push(item.path);
            console.log("Navigate to", item.path);
        } else {
            console.warn("No path defined for this item or item is undefined:", item);
        }
    }

    // const location = useLocation();
    // const selectedKey = location.pathname;

    const selectedKey = router.pathname;

    return (
        <div className="h-dvh flex">
            <div className="relative flex h-full flex-col border-r-small border-divider p-6" style={{flexBasis: '20%'}}>
                <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                    <Sidebar
                        defaultSelectedKey="home"
                        iconClassName="group-data-[selected=true]:text-primary-foreground"
                        itemClasses={{
                            base: "data-[selected=true]:bg-primary-400 dark:data-[selected=true]:bg-primary-300 data-[hover=true]:bg-default-300/20 dark:data-[hover=true]:bg-default-200/40",
                            title: "group-data-[selected=true]:text-primary-foreground",
                        }}
                        items={sidebarItems}
                        onSelect={onMenuClick}
                        selectedKeys={[selectedKey]}
                        defaultSelectedKeys={[selectedKey]}
                    />
                    <Spacer y={8}/>
                </ScrollShadow>
            </div>
            <div className="flex-1 p-6" style={{flexBasis: '80%'}}>
                <Outlet/>
            </div>
        </div>
    );
}
