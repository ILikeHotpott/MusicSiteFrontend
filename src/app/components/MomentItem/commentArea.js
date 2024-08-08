"use client";

// CommentArea.js
import React, { useState } from 'react';
import { Textarea, Button } from "@nextui-org/react";
import axios from 'axios';

const CommentArea = ({ momentId, onCommentSubmitted }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = async () => {
        if (comment.trim()) {
            try {
                await axios.post('http://127.0.0.1:8000/submit-moment-comment/', {
                    momentId,
                    text: comment,
                });
                onCommentSubmitted();
                setComment('');
            } catch (error) {
                console.error('Error submitting comment:', error);
            }
        }
    };

    return (
        <div className="relative">
            <Textarea
                placeholder="Enter your comment"
                minRows={5}
                style={{ fontSize: '18px' }}
                value={comment}
                onChange={handleCommentChange}
            />
            <Button
                color="primary"
                className="absolute bottom-2 right-2"
                radius="full"
                onClick={handleCommentSubmit}
            >
                Comment
            </Button>
        </div>
    );
}

export default CommentArea;

