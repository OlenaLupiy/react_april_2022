import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div>
            <h2>PostId:{postId}, ID: {id} {name}</h2>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;