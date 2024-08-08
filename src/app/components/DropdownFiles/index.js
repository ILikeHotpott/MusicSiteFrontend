'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Icon } from "@iconify/react";
import './index.css';

function DropdownFiles() {
    const [files, setFiles] = useState([]);
    const [disableImages, setDisableImages] = useState(false);
    const [disableVideos, setDisableVideos] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        const newFiles = [...files, ...acceptedFiles];

        const images = newFiles.filter(file => file.type.startsWith('image/'));
        const videos = newFiles.filter(file => file.type.startsWith('video/'));

        if (images.length > 0) {
            setDisableVideos(true);
        } else {
            setDisableVideos(false);
        }

        if (videos.length > 0) {
            setDisableImages(true);
        } else {
            setDisableImages(false);
        }

        setFiles(newFiles);
    }, [files]);

    const removeFile = (file) => {
        const newFiles = files.filter(f => f !== file);
        setFiles(newFiles);

        const images = newFiles.filter(file => file.type.startsWith('image/'));
        const videos = newFiles.filter(file => file.type.startsWith('video/'));

        if (images.length === 0) {
            setDisableVideos(false);
        }

        if (videos.length === 0) {
            setDisableImages(false);
        }
    };

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        onDrop,
        accept: disableImages ? 'video/*' : disableVideos ? 'image/*' : 'image/*,video/*',
        maxFiles: 10,
        maxSize: 10485760
    });

    const images = files.filter(file => file.type.startsWith('image/'));
    const videos = files.filter(file => file.type.startsWith('video/'));

    return (
        <div className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <p>(Images: max 9, Videos: max 1)</p>
            </div>
            <div className="files-preview">
                {images.length > 0 && (
                    <div>
                        <h4>Images</h4>
                        <div className="images-preview">
                            {images.slice(0, 9).map((file, index) => (
                                <div key={index} className="file-container">
                                    <img src={URL.createObjectURL(file)} alt={`preview ${index}`} />
                                    <div className="overlay">
                                        <Icon
                                            icon="fa:close"
                                            width="3rem"
                                            height="3rem"
                                            style={{ color: "#ffffff", cursor: "pointer" }}
                                            onClick={() => removeFile(file)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {videos.length > 0 && (
                    <div>
                        <h4>Videos</h4>
                        <div className="videos-preview">
                            {videos.slice(0, 1).map((file, index) => (
                                <div key={index} className="file-container">
                                    <video controls>
                                        <source src={URL.createObjectURL(file)} type={file.type} />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className="overlay">
                                        <Icon
                                            icon="fa:close"
                                            width="3rem"
                                            height="3rem"
                                            style={{ color: "#ffffff", cursor: "pointer" }}
                                            onClick={() => removeFile(file)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropdownFiles;
