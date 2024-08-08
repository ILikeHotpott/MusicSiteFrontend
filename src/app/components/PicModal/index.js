'use client';

import React from "react";
import ReactDOM from "react-dom";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Image
} from "@nextui-org/react";

export default function PicModal({url, isOpen, onClose}) {
    return ReactDOM.createPortal(
        <Modal backdrop="blur"
               isOpen={isOpen}
               onClose={onClose}
               size="xl"
               scrollable
               placement="top"
               className="custom-modal"
               css={{zIndex: 9999}}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                    <Image
                        src={url}
                        alt="Moment Image"
                        style={{width: '100%', height: 'auto'}}
                        className="z-50"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>,
        document.body
    );
}
