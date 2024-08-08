'use client';

import React from 'react';
import { Card, Avatar, Divider } from "@nextui-org/react";

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <div key={comment.id} className="mb-3">
                    <Card>
                        <Card.Header className="flex gap-3">
                            <Avatar src={comment.user.avatar} radius="full" />
                            <div className="flex flex-col">
                                <h4 className="font-semibold">{comment.user.username}</h4>
                                <p>{comment.content}</p>
                            </div>
                        </Card.Header>
                    </Card>
                    <Divider />
                </div>
            ))}
        </div>
    );
}

export default CommentList;
