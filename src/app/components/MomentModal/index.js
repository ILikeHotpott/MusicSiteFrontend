"use client";

import React, {useState} from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader, Spacer,
    Textarea,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import DropdownFiles from "@/app/components/DropdownFiles";

export default function MomentModal({isOpen, onClose}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <Modal size="xl" placement="top" isOpen={isOpen} shouldBlockScroll={false} onOpenChange={onClose}>
            <ModalContent>
                <ModalBody>
                    <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                        <h1 className="text-xl">Create a moment</h1>
                    </ModalHeader>
                    <form
                        className="flex w-full flex-col gap-2"
                        onSubmit={(e) => {
                            e.preventDefault();
                            onClose();
                        }}
                    >
                        <Textarea
                            aria-label="Feedback"
                            minRows={6}
                            name="feedback"
                            placeholder="Say something about this moment..."
                            variant="faded"
                            style={{fontSize: '18px'}}
                        />
                        <div
                            className="p-2 text-sm mt-2 rounded-2xl border-2 flex items-center justify-between">
                            <p className="mr-4 font-bold">Add more contents</p>
                            <div className="flex space-x-2">
                                <button
                                    type="button" // 确保这是一个按钮而不是提交按钮
                                    className="hover:opacity-75 active:scale-90 focus:outline-none"
                                    onClick={toggleDropdown}
                                >
                                    <Icon icon="gravity-ui:picture" width="2rem" height="2rem"
                                          style={{color: '#67D073'}}/>
                                </button>
                                <button
                                    type="button" // 确保这是一个按钮而不是提交按钮
                                    className="hover:opacity-75 active:scale-90 focus:outline-none">
                                    <Icon icon="fluent:location-28-filled" width="2rem" height="2rem"
                                          style={{color: '#ff1f1f'}}/>
                                </button>
                                <button
                                    type="button" // 确保这是一个按钮而不是提交按钮
                                    className="hover:opacity-75 active:scale-90 focus:outline-none">
                                    <Icon icon="ph:at-bold" width="2rem" height="2rem"
                                          style={{color: '#2449b7'}}/>
                                </button>
                            </div>
                        </div>
                        {isDropdownOpen &&
                            <DropdownFiles/>
                        }

                        <div className="flex w-full items-center justify-between pb-4 mt-5">
                            <Spacer x={2}/>
                            <div className="flex gap-2">
                                <Button type="button" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" type="submit">
                                    Post
                                </Button>
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
