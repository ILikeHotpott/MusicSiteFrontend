'use client';

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";

export default function CustomDropdown() {
    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        as="button"
                        className="transition-transform"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold text-black">Signed in as</p>
                        <p className="font-semibold text-black">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings" className="text-black">
                        Settings
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" className="text-black">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
